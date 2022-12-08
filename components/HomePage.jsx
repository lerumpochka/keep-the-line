import React from "react";
import Link from "next/link";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__container}>
        <div className={styles.text__con}>
          <h2>Welcome!</h2>
        </div>
        <div>
          <div className={styles.buttons__con}>
            <Link href="/keeper/tasks">Keep a spot</Link>
            <Link href="/taker/tasks">Take a spot</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
