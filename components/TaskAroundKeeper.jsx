import React from "react";

const style = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alitItems: "center",
  flexDirection: "column",
};
function TaskAroundKeeper(props) {
  return (
    <div style={style}>
      <h1>Task around you</h1>
    </div>
  );
}

export default TaskAroundKeeper;
