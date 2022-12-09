
import { getSession } from "next-auth/react";
import React from "react";
import db from "../../../../database";

function KeeperTaskDetails(props) {
  const task = props.task
  return (
    <div>
      <h1>Keeper Task Details page {task.id}</h1>
      <p>task info: {task.title}, where: {task.address}</p>
      <p>here should be communication btns, ecc</p>
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


  const id = req.query.id
  const task = JSON.parse(JSON.stringify(await db.Task.findByPk(id)))
  return {
      props: { task }
  }
}

export default KeeperTaskDetails;
