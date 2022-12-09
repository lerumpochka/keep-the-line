import { getSession } from "next-auth/react";
import React from "react";
import CreatedTaskCard from "../../../components/CreatedTaskCard";
import db from "../../../database";

function TakerTasks(props) {
  const tasks = props.tasks;
  const user = props.currentUser.user
  return (
    <div>
      <h1>Ceated Tasks by {user.email} </h1>
      {tasks.map((task) => (
        <CreatedTaskCard key={task.id} id={task.id} title= {task.title} description= {task.description} 
        address= {task.address} amount= {task.amount} date= {task.date} time= {task.time}/>
        ))}
    </div>
  );
}
export async function getServerSideProps(req, res) {
    const session = await getSession(req);
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
        },
      };
    }

    const userEmail = session.user.email;
    const user = JSON.parse(JSON.stringify(await db.User.findOne({ where: { email: userEmail } })));
    const userId = user.id;
    const tasks = JSON.parse(JSON.stringify(await db.Task.findAll({ where: { UserId: userId } })));

    return {
      props: { tasks, currentUser: session },
    };
}

export default TakerTasks;
