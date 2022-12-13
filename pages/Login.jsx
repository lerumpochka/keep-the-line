import React from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/Login.module.css";
import Image from "next/image";

function Login() {
  return (
    <div className={styles.login__root}>
      <div className={styles.container}>
        <div>
          <Image src="/keep-the-line.png" width="280" height="280" alt="keep the line logo" />
        </div>

        <div className={styles.text__con}>
          <h3>Welcome</h3>
          <p>
            Please Keep the line!!! this is what we all hear when we are in a queue but rarely
            people listen to it. Start using our app and waste time no more.
          </p>
        </div>

        <div className={styles.btn__con}>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
