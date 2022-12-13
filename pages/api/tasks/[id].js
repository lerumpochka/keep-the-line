import db from "../../../database";


export default async function handler(req, res) {
  if (req.method == "PUT") {
        console.log("reqbody", req.body);
        const progress = JSON.parse(req.body)

        const id = req.query.id

    try {
        let task = await db.Task.findByPk(id)

        console.log('-------here---',task);
        task = await task.update(progress);
        console.log('------- upd---',task);

        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        res.status(400)
    }
  }
}
