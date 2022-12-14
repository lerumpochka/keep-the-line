import React from "react";
import Link from "next/link";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__container}>
        <div style={{ textAlign: "center" }} className={styles.text__con}>
          <h2>Welcome!</h2>
          <p>Our application works with two ways:</p>
          <h2>Taker:</h2>
          <p>
            a person who posts a task or more to ask other users to book it and do the queue in an
            office.
          </p>
          <h2>Keeper:</h2>
          <p>
            another user who sees the tasks and book one or more to do, then communicates with the
            taker when the turn is approaching.
          </p>

          <p>Enjoy this App and waste no more time!!!</p>
        </div>
        {/* <div>
          <div className={styles.buttons__con}>
            <Link href="/keeper/tasks">Keep a spot</Link>
            <Link href="/taker/tasks/new">Take a spot</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
// Welcome! Our application works with two ways: Taker: a person who posts a task or more to
//           ask other users to book it and do the queue in an office. Keeper: another user who sees
//           the tasks and book one or more to do, then communicates with the taker when the turn is
//           approaching. Enjoy this App and waste no more time!!!
