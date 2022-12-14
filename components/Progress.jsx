import ProgressBar from "@ramonak/react-progress-bar";
import styles from "../styles/Progress.module.css";

import { useState, useEffect, useRef } from "react";

function Progress({ isThisKeeper, ...props }) {
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const [inTheLine, setInTheLine] = useState({});
  const [yourTurn, setYourTurn] = useState({});
  const [taskDone, setTaskDone] = useState({});

  const [isInTheLine, setIsInTheLine] = useState(false);
  const [isYourTurn, setIsYourTurn] = useState(false);
  const [isTaskDone, setIsTaskDone] = useState(false);

  useEffect(() => {
    if (props.progress === null) {
      setInTheLine({ opacity: "1" });
      setYourTurn({ opacity: "0.6" });
      setTaskDone({ opacity: "0.6" });
      setIsInTheLine(true);
    } else if (props.progress == "30") {
      setMessage("I am in the line😐");
      setMessageStyle({ justifyContent: "flex-start" });

      setIsInTheLine(false);
      setIsYourTurn(true);

      setYourTurn({ opacity: "1" });
      setInTheLine({ opacity: "0.6" });
      setTaskDone({ opacity: "0.6" });
    } else if (props.progress == "60") {
      setYourTurn({ opacity: "0.6" });
      setInTheLine({ opacity: "0.6" });
      setTaskDone({ opacity: "1" });

      setIsInTheLine(false);
      setIsYourTurn(false);
      setIsTaskDone(true);

      setMessage("Almost your turn😃");
      setMessageStyle({ justifyContent: "center" });
    } else if (props.progress == "100") {
      setMessage("Task done😉");
      setMessageStyle({ justifyContent: "flex-end" });

      setIsInTheLine(false);
      setIsYourTurn(false);
      setIsTaskDone(false);

      setYourTurn({ opacity: "0.6" });
      setInTheLine({ opacity: "0.6" });
      setTaskDone({ opacity: "0.6" });
    }
  }, [props.progress]);

  return (
    <div className={styles.container}>
      <div style={messageStyle} className={styles.status__con}>
        <h3 className={styles.status}>{message}</h3>
      </div>
      <ProgressBar completed={props.progress} bgColor="#373f44" height="30px" />
      {isThisKeeper && (
        <div className={styles.btn__con}>
          <div>
            <button
              style={inTheLine}
              className={styles.btn}
              progress="30"
              onClick={isInTheLine ? props.handleClick : null}
            >
              I am in the line😐
            </button>
          </div>

          <div>
            <button
              style={yourTurn}
              className={styles.btn}
              progress="60"
              onClick={isYourTurn ? props.handleClick : null}
            >
              Almost your turn😃
            </button>
          </div>

          <div>
            <button
              style={taskDone}
              className={styles.btn}
              progress="100"
              onClick={taskDone ? props.handleClick : null}
            >
              Task done😉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Progress;
