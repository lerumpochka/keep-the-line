import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../styles/Progress.module.css";

import { useState, useEffect, useRef } from "react";

function Progress({ isThisKeeper, ...props }) {
  const [style, setStyle] = useState({});
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});
  const [startProgress, setStartProgress] = useState(false);

  const inTheLine = useRef();
  const yourTurn = useRef();
  const taskDone = useRef();

  console.log(props.progress);

  useEffect(() => {
    if (props.progress === null) {
      // setStartProgress(true);
    } else if (props.progress == "30") {
      // setStyle({ display: "none" });
      setMessage("I am in the line😐");
      setMessageStyle({ justifyContent: "flex-start" });
    } else if (props.progress == "60") {
      // setStyle({ display: "none" });

      setMessage("Almost your turn😃");
      setMessageStyle({ justifyContent: "center" });
    } else if (props.progress == "100") {
      setMessage("Task done😉");
      setMessageStyle({ justifyContent: "flex-end" });
    }
  }, [props.progress]);

  return (
    <div className={styles.container}>
      <div style={messageStyle} className={styles.status__con}>
        <h3 className={styles.status}>{message}</h3>
      </div>
      <ProgressBar completed={props.progress} bgColor="#373f44" height="20px" />
      {isThisKeeper && (
        <div className={styles.btn__con}>
          <div style={style} ref={inTheLine}>
            <button className={styles.btn} progress="30" onClick={props.handleClick}>
              I am in the line😐
            </button>
          </div>

          <div style={style} ref={yourTurn}>
            <button className={styles.btn} progress="60" onClick={props.handleClick}>
              Almost your turn😃
            </button>
          </div>

          <div style={style} ref={taskDone}>
            <button className={styles.btn} progress="100" onClick={props.handleClick}>
              Task done😉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Progress;
