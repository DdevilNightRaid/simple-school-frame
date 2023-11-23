import * as fs from 'fs';

export default async function handler(req, res) {
  let data = await fs.promises.readdir('noticedb')
  let myFile;
  let allNotice = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myFile = await fs.promises.readFile((`noticedb/${item}`), 'utf-8')
    allNotice.push(JSON.parse(myFile))

  }
  console.log(myFile)
  res.status(200).json(allNotice.reverse())
}
