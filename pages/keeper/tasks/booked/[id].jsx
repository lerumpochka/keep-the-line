import { getSession } from "next-auth/react";
import React, { useState } from "react";
import db from "../../../../database";
import Progress from "../../../../components/Progress";
import styles from "../../../../styles/TaskCard.module.css";

function KeeperTaskDetails(props) {
  const [task, setTask] = useState(props.task);

  const handleClick = async (event) => {
    const progress = event.target.getAttribute("progress");
    console.log(progress);
    // from frontend fetch an api endpoint to update
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({ progress: parseInt(progress) }),
    });

    console.log("------task fronend", task);
    const updTask = await res.json();
    console.log("UPD---------", updTask);
    setTask(updTask);
  };

  return (
    <div>
      <h1 className={styles.communicate}>Communicate with the Taker</h1>
      <div className={styles.container}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.address}</p>
        <p>
          {task.date}
          <span>{task.time}</span>
        </p>
        {task.amount && <p>amount:{task.amount} &euro;</p>}
      </div>
      <Progress isThisKeeper={true} handleClick={handleClick} progress={task.progress} />
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

export default KeeperTaskDetails;
