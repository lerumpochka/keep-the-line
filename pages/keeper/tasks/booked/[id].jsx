import { useRouter } from "next/router";
import React from "react";
import db from "../../../../database";

function KeeperTaskDetails(props) {
  const task = props.task
  return (
    <div>
      <h1>Keeper Task Details page {task.id}</h1>
      <p>task info: {task.title}, where: {task.address}</p>
      <p>here should be communication btns, ecc</p>
    </div>
  );
}
export async function getServerSideProps(req, res) {
  const id = req.query.id
  const task = JSON.parse(JSON.stringify(await db.Task.findByPk(id)))
  return {
      props: { task }
  }
}

export default KeeperTaskDetails;
