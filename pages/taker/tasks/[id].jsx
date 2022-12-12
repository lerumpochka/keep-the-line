

import React from "react";
import Progress from "../../../components/Progress";
import db from "../../../database";
import { getSession } from "next-auth/react";



function TakerTaskDetails(props) {
  const task = props.task;
  return (
    <div>
      <h1> Task Details/Communication:</h1>
      <p>
        task id: {task.id} task title: {task.title}, where: {task.address}
      </p>
      <Progress />

      <button>Cancel Task</button>
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
  const id = req.query.id;
  const task = JSON.parse(JSON.stringify(await db.Task.findByPk(id)));
  return {
    props: { task },
  };
}










export default TakerTaskDetails;
