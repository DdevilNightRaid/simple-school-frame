import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dirPath = 'images/homeImgs';
  const fileNames = fs.readdirSync(dirPath);

  const images = [];

  for (let i = 0; i < fileNames.length; i++) {
    const filePath = `${dirPath}/${fileNames[i]}`
    const file = fs.readFileSync(filePath);
    const base64 = file.toString('base64');

    const image = {
      data: base64,
    };

    images.push(image);
  }

  res.status(200).json({ images });
}
