import db from "../../../database";


export default async function handler(req, res) {
  const id = req.query.id
  if (req.method == "PUT") {
        const progress = JSON.parse(req.body)
    try {
        let task = await db.Task.findByPk(id)

        task = await task.update(progress);

        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        res.status(400)
    }
  }
  if (req.method == "DELETE") {
    try {
      let task = await db.Task.findByPk(id)
      await task.destroy({ where: { id: task.id } })
      await db.Booking.destroy({ where: { TaskId: id } })



      res.status(200)
  } catch (error) {
      console.log(error.message);
      res.status(400)
  }
  }
}
