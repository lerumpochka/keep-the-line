import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import db from "../../../../database";

function TakerTasks(props) {
  const tasks = props.tasks
  return (
    <div>
    All TakerTasks here
    {tasks.map(task=><li key={task.id}><Link href={`/profile/taker/tasks/${task.id}`}>{task.description} in {task.adress}</Link></li>)}
    </div>);
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  const userName = session.user.name
  const user = JSON.parse(JSON.stringify(await db.User.findOne({where: {name: userName }})))
  // const userId = user.id
  const userId = 2

  const tasks = JSON.parse(JSON.stringify(await db.Task.findAll({where: {UserId: userId}})))

  return {
      props: { tasks }
  }
}

export default TakerTasks;

