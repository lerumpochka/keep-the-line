import db from "../../../database";


export default async function handler(req, res) {
  if (req.method == "PUT") {
    const progress = req.body;
    const id = req.query.id

    try {
        const task = await db.Task.update({title: progress}, {where: {id: id}, returning: true});
        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        res.status(400)
    }
  }
}
