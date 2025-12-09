const { Jimp } = require('jimp');

async function processImage() {
    try {
        const image = await Jimp.read('uploaded_cube.png');
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        // Grid is 4 columns, 3 rows
        const cols = 4;
        const rows = 3;
        const frameWidth = width / cols;
        const frameHeight = height / rows;

        console.log(`Original: ${width}x${height}`);
        console.log(`Frame: ${frameWidth}x${frameHeight}`);

        const totalFrames = cols * rows;

        // Create new image: 12 frames wide, 1 frame high
        const newWidth = frameWidth * totalFrames;
        const newHeight = frameHeight;

        const newImage = new Jimp({ width: newWidth, height: newHeight });

        let currentFrame = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Copy region from original to new position
                const srcX = c * frameWidth;
                const srcY = r * frameHeight;
                const destX = currentFrame * frameWidth;

                newImage.blit(image, destX, 0, srcX, srcY, frameWidth, frameHeight);
                currentFrame++;
            }
        }

        // console.log(Object.keys(newImage));
        // console.log(Object.getPrototypeOf(newImage));

        // Try standard write if writeAsync is missing
        if (newImage.write) {
            await new Promise((resolve, reject) => {
                newImage.write('public/cube-spin.png', (err) => {
                    if (err) reject(err);
                    else {
                        console.log('Successfully created public/cube-spin.png');
                        resolve();
                    }
                });
            });
        } else {
            console.error('No write method found');
        }

    } catch (err) {
        console.error(err);
    }
}

processImage();
