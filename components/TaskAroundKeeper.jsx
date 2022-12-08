import styles from "../styles/TaskAroundKeeper.module.css";
import TaskCard from "./TaskCard";

function TaskAroundKeeper(props) {
  return (
    <div className={styles.container}>
      <div className={styles.h1__con}>
        <h1>Tasks around you</h1>
      </div>
      <div className={styles.tasks__con}>
        <TaskCard />
      </div>
    </div>
  );
}

export default TaskAroundKeeper;
