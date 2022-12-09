import { getSession } from "next-auth/react";
import React from "react";
import taskController from "../../../controllers/tasks";
import db from "../../../database";


function Task(props) {
  const task = props.task
 const user = props.user
 console.log('user', user);
  return (
    <div>
      <h1>This the {task.title} in {task.address} with id {task.id}</h1>
      <form action="/api/bookings" method="POST">
              <input hidden={true} type="text" name="UserId" id="UserId" defaultValue={user.id}/>
              <input hidden={true} type="text" name="TaskId" id="TaskId" defaultValue={task.id} />
              <input hidden={true} type="text" name="statusArrival" id="statusArrival" defaultValue={false} />
              <input hidden={true} type="text" name="statusDone" id="statusDone" defaultValue={false} />
              <input hidden={true} type="text" name="cancel" id="cancel" defaultValue={false} />

                <input type="submit" value="Book" />
      </form>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const id = req.query.id;
  const task = await taskController.find(id);
  
  const session = await getSession(req);
  if(!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F'}
    }
  }
  const user = JSON.parse(JSON.stringify(await db.User.findOne({where: {email: session.user.email}})))

  return {
    props: { task, user },
  };
}

export default Task;
