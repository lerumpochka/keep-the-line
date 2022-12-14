import db from "../../../database";


export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    try {
      await db.Task.create(data);
      res.status(200).redirect(`/taker/tasks`);
    } catch (error) {
      console.log(error.message);
      res.status(400)
    }
  }
  if (req.method == "DELETE") {
    const id = req.query.id;
    const task = JSON.parse(JSON.stringify(db.Task.findByPk(id)));
}
if (req.method == 'PUT') {
    const id = req.query.id;
    const task = JSON.parse(JSON.stringify(db.Task.findByPk(id)));
}
}

