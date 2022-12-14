import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import db from "../../database";
import styles from "../../styles/Profile.module.css";
import { signOut } from "next-auth/react";

// import db from "../../database";

function Profile(props) {
  return (
    <div className={styles.container}>
      <h1>Hey {props.currentUser.name}</h1>
      <h3>Here is your personal information:</h3>
      <p><strong>User Name: </strong>{props.currentUser.name}</p>
        <p><strong>Email: </strong>{props.currentUser.email}</p>
        <p><strong>Amount paid: </strong> 25&euro;</p>
        <p><strong>Amount received: </strong> 35&euro;</p>


      <div>
        <button
          style={{
            padding: "10px 20px",
            marginTop: "2rem",
            marginLeft: "20px",
            borderRadius: "5px",
            backgroundColor: "rgba(223, 0, 0, 0.796)",
            border: "none",
            color: "white",
          }}
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
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
