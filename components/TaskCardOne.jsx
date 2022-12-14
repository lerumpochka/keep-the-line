import Link from "next/link";
import styles from "../styles/TaskCard.module.css";

function TaskCardOne(props) {
  return (
    <Link className={styles.link} href={`/keeper/tasks/booked/${props.id}`}>
      <div className={styles.container}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.address}</p>
        <p>
          {props.date}
          <span>{props.time}</span>
        </p>
        {props.amount && <p>amount:{props.amount} &euro;</p>}
      </div>
    </Link>
  );
}

export default TaskCardOne;
