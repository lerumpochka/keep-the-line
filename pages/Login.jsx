import React from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.login__con}>
      <div>
        <h1>Login</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
}
