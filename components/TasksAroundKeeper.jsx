import styles from "../styles/TaskAroundKeeper.module.css";
import TaskCard from "./TaskCard";

function TasksAroundKeeper(props) {
  console.log(props.tasks)
  return (
    <div className={styles.container}>
      <div className={styles.h1__con}>
        <h1>Tasks around you</h1>
      </div>
      <div className={styles.tasks__con}>
        
        {props.tasks.map((task) => (
          <TaskCard key={task.id} id={task.id} title= {task.title} description= {task.description} 
          address= {task.address} amount= {task.amount} date= {task.date} time= {task.time}/>
        ))}
      </div>
    </div>
  );
}

export default TasksAroundKeeper;
