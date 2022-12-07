import React from "react";
import Link from "next/link";
import styles from "../../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage__contianer}>
      <h1>Home page</h1>
      <Link href="/login">login page</Link>
      <br />
      <br />
      <Link href="/profile">Profile page</Link>
      <br />
      <br />
      <Link href="/tasks/12">task details page</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks">All Keeper tasks</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks/34">Keeper task details page</Link>
      <br />
      <br />
      <Link href="/tasks/new">Create new task-- form</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks">All taker Tasks</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks/32">Taker task details page</Link>
    </div>
  );
}

export default HomePage;
