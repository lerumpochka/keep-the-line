import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import db from "../../database";
import { signOut } from "next-auth/react";
import styles from "../../styles/Login.module.css";

// import db from "../../database";

function Profile(props) {
  console.log(props.currentUser);
  return (
    <>
      <div>
        <h1>Hey {props.currentUser.name}</h1>
        <br />
        
        <h3>Here is your personal information:</h3>
        <br />
        
        <p><strong>User Name:</strong>{props.currentUser.name}</p>
        <p><strong>Email:</strong>{props.currentUser.email}</p>
        <p><strong>Amount paid:</strong> 25&euro;</p>
        <p><strong>Amount received:</strong> 35&euro;</p>
      </div>
      <br />

        <br />
        <h3> Your booked Tasks:</h3>
        
        <div className={styles.buttons__con}>
          <Link href="/keeper/tasks/booked">Booked Tasks</Link>
        </div>
        <br />
        <h3> Your created Tasks:</h3>
        
        <div className={styles.buttons__con}>
          <Link href="/taker/tasks/">My Tasks</Link>
        </div>
      <div className={styles.btn__con}>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
    </>
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
