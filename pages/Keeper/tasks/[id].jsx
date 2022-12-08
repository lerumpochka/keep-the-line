import { useRouter } from "next/router";
import React from "react";

function KeeperTaskDetails() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Keeper task with the id {id}</div>;
}

export default KeeperTaskDetails;
