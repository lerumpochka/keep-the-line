import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import db from "../../../../database";

function TakerTasks(props) {
  const tasks = props.tasks
  return (
    <div>
    All TakerTasks (tasks that I have created)
    {tasks.map(task=><li key={task.id}><Link href={`/profile/taker/tasks/${task.id}`}>{task.description} in {task.address}</Link></li>)}
    </div>);
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req);
      if(!session) {
        return {
          redirect: {
            permanent: false,
            destination: '/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F'}
        }
      }
  const userEmail = session.user.email
  const user = JSON.parse(JSON.stringify(await db.User.findOne({where: {email: userEmail }})))
  const userId = user.id
 

  const tasks = JSON.parse(JSON.stringify(await db.Task.findAll({where: {UserId: userId}})))

  return {
      props: { tasks }
  }
}

export default TakerTasks;

