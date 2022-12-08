import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Component({tasks}) {
  // hint:
  // add to the return the link of the cocktail
  // inside put a div with the card style
  // inside the div put an h3 with the cocktail name
  // and a paragraph with the description
  return (
    <Link href={`/database/${task.id}`}>
      <div className={styles.card}>
        <h3>{tasks.title}</h3>
        <p>{tasks.description}</p>
        <p>{tasks.address}</p>
        <p>{tasks.amount}</p>
      </div>
    </Link>
  )
}