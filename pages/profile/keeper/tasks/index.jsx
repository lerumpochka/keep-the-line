import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import db from "../../../../database";

function KeeperTasks(props) {
  const bookings = props.bookings
  const tasks = bookings.map(booking=>booking.Task)
  console.log('tasks from booking', tasks);
  return (
    <div>
    All Keeper Tasks here
    {tasks.map(task=><li key={task.id}><Link href={`/profile/keeper/tasks/${task.id}`}>{task.description} in {task.adress}</Link></li>)}
    <p> communication btns , ecc</p>
    </div>);
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  const userName = session.user.name
  const user = JSON.parse(JSON.stringify(await db.User.findOne({where: {name: userName }})))
  // const userId = user.id
  const userId = 2

  const bookings = JSON.parse(JSON.stringify(await db.Booking.findAll({where: {UserId: userId}, include: "Task"})))
 
  return {
      props: { bookings }
  }
}

export default KeeperTasks;
