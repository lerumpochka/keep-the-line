import { getSession } from "next-auth/react";
import React from "react";
import TaskCard from "../../../components/TaskCard";
import taskController from "../../../controllers/tasks";
import db from "../../../database";

function Task(props) {
  const task = props.task;
  const user = props.user;
  return (
    <div>
      <TaskCard
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        address={task.address}
        amount={task.amount}
        date={task.date}
        time={task.time}
      />
      <form action="/api/bookings" method="POST">
        <input hidden={true} type="text" name="UserId" id="UserId" defaultValue={user.id} />
        <input hidden={true} type="text" name="TaskId" id="TaskId" defaultValue={task.id} />
        <input
          hidden={true}
          type="text"
          name="statusArrival"
          id="statusArrival"
          defaultValue={false}
        />
        <input hidden={true} type="text" name="statusDone" id="statusDone" defaultValue={false} />
        <input hidden={true} type="text" name="cancel" id="cancel" defaultValue={false} />

        <div style={{ width: "100%", textAlign: "center" }}>
          <input
            style={{
              padding: "10px 25px",
              borderRadius: "25px",
              border: "none",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              color: "white",
              backgroundColor: "#373f44",
            }}
            type="submit"
            value="Book"
          />
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const id = req.query.id;
  const task = await taskController.find(id);

  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
      },
    };
  }
  const user = JSON.parse(
    JSON.stringify(await db.User.findOne({ where: { email: session.user.email } }))
  );

  return {
    props: { task, user },
  };
}

export default Task;
