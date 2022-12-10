
import { getSession } from "next-auth/react";
import React from "react";
import db from "../../../../database";
import Progress from "../../../../components/Progress";

function KeeperTaskDetails(props) {
  const task = props.task;
  return (
    <div>
      <h1>Keeper Task Details page {task.id}</h1>
      <p>
        task info: {task.title}, where: {task.address}
      </p>
      <Progress isThisKeeper={true} />
    </div>
  );
}
export async function getServerSideProps(req, res) {
<<<<<<< HEAD
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
=======
  const id = req.query.id;
  const task = JSON.parse(JSON.stringify(await db.Task.findByPk(id)));
>>>>>>> 7ed138866122457aed920aa1e48fa7c914def861
  return {
    props: { task },
  };
}

export default KeeperTaskDetails;
