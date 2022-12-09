import { useRouter } from "next/router";
import React from "react";
import Progress from "../../../components/Progress";
import db from "../../../database";

function TakerTaskDetails(props) {
  const task = props.task;
  return (
    <div>
      <h1>TakerTaskDetails page {task.id}</h1>
      <p>
        task info: {task.title}, where: {task.address}
      </p>
      <Progress />

      <button>Cancel Task</button>
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
export default TakerTaskDetails;
