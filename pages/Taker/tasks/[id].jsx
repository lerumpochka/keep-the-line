import { useRouter } from "next/router";
import React from "react";

function TakerTaskDetails() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>TakerTaskDetails page {id}</h1>
    </div>
  );
}

export default TakerTaskDetails;
