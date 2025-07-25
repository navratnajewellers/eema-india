const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "../../../public/images/eemagine2024");
const outputFile = path.join(
  __dirname,
  "../../../public/images/galleryFileList/eemagine2024.json"
);

const files = fs.readdirSync(folderPath);
const images = files
  .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
  .map((file) => `/images/eemagine2024/${file}`);

fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
console.log(`✅ JSON generated with ${images.length} images.`);
