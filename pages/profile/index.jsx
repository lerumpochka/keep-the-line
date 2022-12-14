import { getSession } from "next-auth/react";
import React from "react";
import db from "../../database";
import styles from "../../styles/Profile.module.css";
import Link from "next/link";
// import db from "../../database";

function Profile(props) {
  console.log(props.currentUser);
  return (
    <div>
      <div>
        <h1>profile page</h1>
        <p>{props.currentUser.name}</p>
        <p>{props.currentUser.email}</p>
      </div>

      <div className={styles.buttons__con}>
        <Link href="/keeper/tasks">Keep a spot</Link>
        <Link href="/taker/tasks/new">Take a spot</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  //console.log(session.user.email)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
      },
    };
  }
  // find user from DB based on email
  const user = JSON.parse(
    JSON.stringify(await db.User.findOne({ where: { email: session.user.email } }))
  );
  return {
    props: { currentUser: user },
  };
}

export default Profile;
