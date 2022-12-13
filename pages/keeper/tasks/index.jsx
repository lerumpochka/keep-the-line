
import React from "react";
import TasksAroundKeeper from "../../../components/TasksAroundKeeper";
import { getSession } from "next-auth/react";
import db from "../../../database";



function KeeperTasks(props) {
  const tasks = props.tasks;
  return (
    <div>
      <TasksAroundKeeper tasks={tasks} />
     
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

  const tasks = JSON.parse(JSON.stringify(await db.Task.findAll()));


  return {
    props: { tasks },
  };
}



export default KeeperTasks;
