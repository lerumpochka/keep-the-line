import Link from "next/link";
import styles from "../styles/TaskCard.module.css";

function TaskCard(props) {
  return (
    <Link className={styles.link} href="/keeper/tasks/1">
      <div className={styles.container}>
        <h2>poste italiane</h2>
        <p>Address: </p>
        <p>
          at 12/12/2022<span>10:45 A.M</span>
        </p>
      </div>
    </Link>
  );
}

export default TaskCard;
