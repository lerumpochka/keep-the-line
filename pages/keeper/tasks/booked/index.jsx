import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import TaskCardOne from "../../../../components/TaskCardOne";
// import db from "../../../../database";
import db from "../../../../database";
import styles from "../../../../styles/TakerTasks.module.css";

function bookedTasks(props) {
  const bookings = props.bookings;
  const tasks = bookings.map((booking) => booking.Task);
  console.log(tasks);
  return (
    <div className={styles.container}>
      <h1 className={styles.head__h1}>Booked Tasks</h1>
      {tasks.map((task) => (
        <TaskCardOne
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
  const userName = session.user.name;
  const user = JSON.parse(JSON.stringify(await db.User.findOne({ where: { name: userName } })));
  const userId = user.id;
  const bookings = JSON.parse(
    JSON.stringify(await db.Booking.findAll({ where: { UserId: userId }, include: "Task" }))
  );

  return {
    props: { bookings },
  };
}

export default bookedTasks;
