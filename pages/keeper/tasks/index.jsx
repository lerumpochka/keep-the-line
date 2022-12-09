import { getSession } from "next-auth/react";
import React from "react";
import TaskAroundKeeper from "../../../components/TaskAroundKeeper";


function KeeperTasks(props) {
  return (
    <div>
      <TaskAroundKeeper tasks={""} />
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


return {
  props: { currentUser: session },
};
}


export default KeeperTasks;
