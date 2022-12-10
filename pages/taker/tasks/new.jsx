import { getSession } from "next-auth/react";
import React from "react";
import db from "../../../database";
import styles from "../../../styles/Form.module.css";

function NewTask(props) {
  const user = props.user;

  return (
    <div>
      <div>
        <div className={styles.container}>
          <h1>Post a Task</h1>
          <div className={styles.form__con}>
            <form className={styles.form} action="/api/tasks" method="POST">
              <input hidden name="UserId" defaultValue={user.id} />
              <div className={styles.input__con}>
                <label htmlFor="title">What to do:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="SPID, POST-ITALIAN, etc..."
                  required
                />
              </div>

              <div className={styles.input__con}>
                <label>Date:</label>
                <input type="date" name="date" id="date" required />
              </div>

              <div className={styles.input__con}>
                <label>Time:</label>
                <input type="time" name="time" id="time" required />
              </div>

              <div className={styles.input__con}>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="address" required />
              </div>

              <div className={styles.input__con}>
                <label htmlFor="amount">Amount to pay:</label>
                <input type="text" id="amount" name="amount" placeholder="how much?" required />
              </div>

              <div>
                <label htmlFor="description">Write some description:</label>
                <textarea id="description" name="description" rows="4" cols="30"></textarea>
              </div>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
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
  const user = JSON.parse(
    JSON.stringify(await db.User.findOne({ where: { email: session.user.email } }))
  );

  return {
    props: { user, currentUser: session },
  };
}

export default NewTask;
