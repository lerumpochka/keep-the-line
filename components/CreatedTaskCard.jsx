import Link from "next/link";
import styles from "../styles/TaskCard.module.css";

function CreatedTaskCard(props) {
  return (
    <Link className={styles.link} href={`/taker/tasks/${props.id}`}>
      <div className={styles.container}>
        <h2>{props.title}</h2>
        <p>{props.address}</p>
        <p>{props.description}</p>
        <p>
          {props.date}<span>{props.time}</span>
        </p>
        <p>amount:{props.amount}$</p>
      </div>
    </Link>
  );
}

export default CreatedTaskCard;
