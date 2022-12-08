import { useRouter } from "next/router";
import React from "react";
import db from "../../../database";

function Task(props) {
  const task = props.task;
  return (
    <div>
      <h1>
        This the {task.title} in {task.address} with id {task.id}
      </h1>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const id = req.query.id;
  const task = JSON.parse(JSON.stringify(await db.Task.findByPk(id)));
  return {
    props: { task },
  };
}

export default Task;
