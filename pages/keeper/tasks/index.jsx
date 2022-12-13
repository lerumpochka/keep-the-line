
import React from "react";
import TasksAroundKeeper from "../../../components/TasksAroundKeeper";
import { getSession } from "next-auth/react";
import db from "../../../database";



function KeeperTasks(props) {
  const tasks = props.tasks;
  return (
    <div>
      <TasksAroundKeeper tasks={tasks} />
     
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

<<<<<<< HEAD
<<<<<<< HEAD

return {
  props: { currentUser: session },
};
}

=======
  const userEmail = session.user.email;
  const user = JSON.parse(JSON.stringify(await db.User.findOne({ where: { email: userEmail } })));
=======
  // const userEmail = session.user.email;
  // const user = JSON.parse(JSON.stringify(await db.User.findOne({ where: { email: userEmail } })));
>>>>>>> 318e6738af93aa11fec3d23e6fd6a0617413e5b7
  
  // const userId = 1;

  // const tasks = JSON.parse(JSON.stringify(await db.Task.findAll({ where: { UserId: userId } })));
  const tasks = JSON.parse(JSON.stringify(await db.Task.findAll()));


  return {
    props: { tasks },
  };
}


<<<<<<< HEAD
>>>>>>> 7ed138866122457aed920aa1e48fa7c914def861
=======
>>>>>>> 318e6738af93aa11fec3d23e6fd6a0617413e5b7

export default KeeperTasks;
