import { useRouter } from "next/router";
import React from "react";

function Task() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>This the task with id {id}</h1>
    </div>
  );
}

export default Task;
