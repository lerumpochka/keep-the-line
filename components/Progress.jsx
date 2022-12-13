import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../styles/Progress.module.css";

import { useState, useEffect } from "react";

function Progress({ isThisKeeper, ...props}) {
  const [progress, setProgress] = useState("");
  const [percent, setPercent] = useState(0);
  const [style, setStyle] = useState({});

  // const handleChange = (e) => {
  //   setProgress(e.target.value);
  //   const name = parseInt(e.target.name);
  //   setPercent(name);
  //   if (name == "70") {
  //     setStyle({ justifyContent: "center", transition: "250ms" });
  //   } else if (name == "100") {
  //     setStyle({ justifyContent: "flex-end", transition: "250ms" });
  //   }
  // };

  return (
    <div className={styles.container}>
      <div style={style} className={styles.status__con}>
        <h3 className={styles.status}>{progress}</h3>
      </div>
      <ProgressBar completed={props.progress} bgColor="#373f44" height="20px" />
      {isThisKeeper && (
        // <form>
        //   <div className={styles.input__con}>
            
        //     <input onChange={handleChange} onClick={props.handleClick}  name={props.progress} type="radio" value="I'm in the line😐" />
        //     <label>I'm in the line</label>
        //   </div>

        //   <div className={styles.input__con}>
        //     <input onChange={handleChange} name={props.progress} type="radio" value="Almost your turn😃" />
        //     <label>Almost your turn</label>
        //   </div>

        //   <div className={styles.input__con}>
        //     <input onChange={handleChange} name="100" type="radio" value="Task done😉" />
        //     <label>Task done</label>
        //   </div>
        // </form>
        <>
        <button progress='30' onClick={props.handleClick}>I am in the line</button>
        <button progress="60" onClick={props.handleClick}>Almost your turn😃</button>
        <button progress="100" onClick={props.handleClick}>Task done😉</button>
        </>
      )}
    </div>
  );
}

export default Progress;
