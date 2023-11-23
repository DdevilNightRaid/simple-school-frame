import * as fs from 'fs';
// http://localhost:3000/api/getNotice?slug=notice0
export default function handler(req, res) {
  fs.readFile(`noticedb/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
        res.status(404).json({error: "File not Found 404"})
    }
    res.status(200).json(JSON.parse(data))
  })
}
