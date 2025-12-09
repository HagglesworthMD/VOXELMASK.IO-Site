import requests
import json
import os
import platform
import uuid
import logging
from pathlib import Path
from datetime import datetime

# Configuration
LICENSE_FILE = Path.home() / ".voxelmask_license"
LEMON_SQUEEZY_API_URL = "https://api.lemonsqueezy.com/v1/licenses"

# Setup basic logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger("VoxelMaskLicense")

class LicenseManager:
    def __init__(self, store_id=None, product_id=None):
        """
        Initialize the License Manager.
        
        :param store_id: Optional Lemon Squeezy Store ID (for stricter validation if needed)
        :param product_id: Optional Lemon Squeezy Product ID
        """
        self.store_id = store_id
        self.product_id = product_id
        self.license_data = self._load_local_license()
        self.offline_mode = False

    def _get_instance_name(self):
        """Generates a unique name for this machine instance."""
        hostname = platform.node()
        # Create a stable but unique ID based on MAC address to prevent simple hostname spoofing issues
        machine_id = str(uuid.getnode())
        return f"{hostname}-{machine_id}"

    def _load_local_license(self):
        """Loads license data from the hidden local file."""
        if LICENSE_FILE.exists():
            try:
                with open(LICENSE_FILE, 'r') as f:
                    return json.load(f)
            except json.JSONDecodeError:
                logger.error("Corrupt license file found.")
                return None
        return None

    def _save_local_license(self, data):
        """Saves license data to the hidden local file."""
        try:
            with open(LICENSE_FILE, 'w') as f:
                json.dump(data, f)
            # Set file permissions to read/write only by owner (Unix-like systems)
            if os.name == 'posix':
                os.chmod(LICENSE_FILE, 0o600)
            logger.info("License data saved locally.")
        except IOError as e:
            logger.error(f"Failed to save license locally: {e}")

    def activate_license(self, license_key):
        """
        Activates a new license key with Lemon Squeezy.
        
        :param license_key: The key provided by the user.
        :return: (bool, message) - Success status and info message.
        """
        instance_name = self._get_instance_name()
        payload = {
            "license_key": license_key,
            "instance_name": instance_name
        }

        try:
            response = requests.post(f"{LEMON_SQUEEZY_API_URL}/activate", data=payload, timeout=10)
            response.raise_for_status()
            data = response.json()

            if data.get("activated"):
                # License is valid and activated
                license_info = {
                    "license_key": license_key,
                    "instance_id": data["instance"]["id"],
                    "customer_name": data["meta"]["customer_name"],
                    "customer_email": data["meta"]["customer_email"],
                    "created_at": data["license"]["created_at"],
                    "expires_at": data["license"]["expires_at"],
                    "last_validated": datetime.now().isoformat()
                }
                self.license_data = license_info
                self._save_local_license(license_info)
                logger.info("License successfully activated.")
                return True, "License activated successfully."
            else:
                error = data.get("error", "Unknown activation error")
                logger.warning(f"Activation failed: {error}")
                return False, f"Activation failed: {error}"

        except requests.exceptions.RequestException as e:
            logger.error(f"Network error during activation: {e}")
            return False, "Network error. Please check your internet connection."

    def validate_license(self):
        """
        Validates the current stored license.
        Handles offline grace periods essentially by initializing successfully if file exists, 
        but strictly validates against API if internet is available.
        
        :return: dict with 'valid' (bool), 'offline' (bool), and 'message' (str)
        """
        if not self.license_data:
            return {"valid": False, "offline": False, "message": "No license found. Please activate."}

        license_key = self.license_data.get("license_key")
        instance_id = self.license_data.get("instance_id")

        payload = {
            "license_key": license_key,
            "instance_id": instance_id
        }

        try:
            response = requests.post(f"{LEMON_SQUEEZY_API_URL}/validate", data=payload, timeout=5)
            response.raise_for_status()
            data = response.json()

            if data.get("valid"):
                # Update local cache safely
                self.license_data["last_validated"] = datetime.now().isoformat()
                self._save_local_license(self.license_data)
                self.offline_mode = False
                return {"valid": True, "offline": False, "message": "License validation successful."}
            else:
                # License revoked or expired according to server
                error = data.get("error", "License invalidated by server")
                logger.warning(f"License invalid: {error}")
                return {"valid": False, "offline": False, "message": f"License invalid: {error}"}

        except requests.exceptions.RequestException:
            # OPTIONAL: Implement a "max offline time" check here using self.license_data["last_validated"]
            # For now, we allow indefinite offline use as per requirements.
            logger.warning("Network unreachable. Proceeding in offline mode with cached license.")
            self.offline_mode = True
            return {"valid": True, "offline": True, "message": "Offline mode: Cached license valid."}

    def get_status(self):
        """Returns the current status details of the license manager."""
        return {
            "has_license": bool(self.license_data),
            "offline_mode": self.offline_mode,
            "customer_email": self.license_data.get("customer_email") if self.license_data else None,
            "expires_at": self.license_data.get("expires_at") if self.license_data else None
        }

# Example Usage (for testing when running directly)
if __name__ == "__main__":
    manager = LicenseManager()
    
    # Check if we already have a license
    status = manager.validate_license()
    
    if status["valid"]:
        print(f"Match Ready! {status['message']}")
        print(f"Licensed to: {manager.get_status().get('customer_email')}")
    else:
        print("No valid license found.")
        # Simulating a user entry flow
        # key = input("Enter your VoxelMask License Key: ")
        # success, msg = manager.activate_license(key)
        # print(msg)
