import db from "../../../database/index";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    try {
     await db.Booking.create(data);

      res.status(200).redirect(`/keeper/tasks/booked`);
    } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
      //redirect(`/`);
    }
  }
}