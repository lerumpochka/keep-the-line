
import { getSession } from "next-auth/react";
import React from "react";
import CreatedTaskCard from "../../../components/CreatedTaskCard";
import db from "../../../database";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

function TakerTasks(props) {
  const tasks = props.tasks;
  const user = props.currentUser.user
  return (
    <div>
      <h1>Hey {user.name}! </h1>
      <br/>
      <h3>Check tasks you have created:</h3>
      <br/>


      {tasks.map((task) => (
        <CreatedTaskCard key={task.id} id={task.id} title= {task.title} description= {task.description} 
        address= {task.address} amount= {task.amount} date= {task.date} time= {task.time}/>
        ))}
        <Link href="/taker/tasks/new">
          <AddIcon sx={{ color: "white", fontSize: "2.7rem" }} />
        </Link>
        
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
