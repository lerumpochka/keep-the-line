import { getSession } from "next-auth/react";
import React from "react";
import CreatedTaskCard from "../../../components/CreatedTaskCard";
import db from "../../../database";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "../../../styles/TakerTasks.module.css";
import Link from "next/link";

function TakerTasks(props) {
  const tasks = props.tasks;
  const user = props.currentUser.user;
  return (
    <div className={styles.container}>
      <div className={styles.text__con}>
        <h1>Created Tasks </h1>
        <Link href="/taker/tasks/new">
          <div className={styles.icon__con}>
            <AddOutlinedIcon sx={{ color: "white", fontSize: "2rem" }} /> <span>New Task</span>
          </div>
        </Link>
      </div>
      {tasks.map((task) => (
        <CreatedTaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          address={task.address}
          amount={task.amount}
          date={task.date}
          time={task.time}
        />
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
