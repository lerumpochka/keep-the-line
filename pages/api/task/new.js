export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    try {
      await bookingsController.create(data);
      res.status(200).redirect(`/profile`);
    } catch (error) {
      console.log(error.message);
      res.status(400).redirect(`/`);
    }
  }
}
