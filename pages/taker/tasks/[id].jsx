import React from "react";
import Progress from "../../../components/Progress";
import db from "../../../database";
import { getSession } from "next-auth/react";
import { style } from "@mui/system";
import styles from "../../../styles/TaskCard.module.css";

function TakerTaskDetails(props) {
  const task = props.task;
  // const [task, setTask] = useState(props.task)

  const handleClick = async () => {
    alert(`task with id: ${task.id} was deleted`);
    setTimeout(() => {
      location.assign("/taker/tasks");
    }, 2000);
    await fetch(`/api/tasks/${task.id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h1 className={styles.communicate}>Progress</h1>
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
      <Progress progress={task.progress} />

      <button
        style={{
          padding: "10px 20px",
          borderRadius: "25px",
          border: "none",
          fontSize: "1rem",
          textTransform: "uppercase",
          color: "white",
          backgroundColor: "#373f44",
          fontWeight: "bold",
          marginLeft: "1rem",
        }}
        onClick={handleClick}
      >
        Cancel Task
      </button>
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
