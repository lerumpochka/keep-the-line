import React from "react";

const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
};
// const h1 = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
// };
function Oops() {
  return (
    <div style={style}>
      <h1>Oops!!!, This app designed only for Mobile :&#40;</h1>
    </div>
  );
}

export default Oops;
