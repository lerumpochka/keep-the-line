
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import db from "../../../../database";
import Progress from "../../../../components/Progress";

function KeeperTaskDetails(props) {
  const [task, setTask] = useState(props.task)

  const handleClick = async (event) => {

    const progress = event.target.getAttribute("progress")
    console.log(progress);
    // from frontend fetch an api endpoint to update
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify({ progress: parseInt(progress) })
    })

    console.log('------task fronend', task);
    const updTask = await res.json()
    console.log('UPD---------', updTask);
    setTask(updTask[1][0])

  }

  return (
    <div>
      <h1>Keeper Task Details page (progress) {task.id}</h1>
      <p>
        task info: {task.title}, where: {task.address}
      </p>
      <Progress isThisKeeper={true} />
      <button progress='80' onClick={handleClick}>Change progress</button>
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
    props: { task },
  };
}

export default KeeperTaskDetails;
