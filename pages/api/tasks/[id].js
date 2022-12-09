export default function handler(req, res) {
  if (req.method == "DELETE") {
    const id = req.query.id;
    const task = JSON.parse(JSON.stringify(db.Task.findByPk(id)));
}
if (req.method == 'PUT') {
    const id = req.query.id;
    const task = JSON.parse(JSON.stringify(db.Task.findByPk(id)));
}
}