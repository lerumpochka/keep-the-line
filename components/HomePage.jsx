import React from "react";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__container}>
        <div className={styles.text__con}>
          <h1>Welcome!</h1>
          <p>Our application works in two ways:</p>
          <div className={styles.taker__con}>
            <h3>Taker:</h3>
            <p>
              a person who posts one task or more so that the Keeper can book it and keep the line.
            </p>
          </div>
          <div className={styles.keeper__con}>
            <h3>Keeper:</h3>
            <p>
              who sees the tasks and book one or more to keep the line, then communicates with the
              Taker when the turn is approaching.
            </p>
          </div>

          <p className={styles.last__text}>Enjoy our App and waste time no more!!!</p>
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
