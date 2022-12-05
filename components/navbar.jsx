import { signOut, signIn } from "next-auth/react";

export default function Navbar(props) {

    return (
      <nav>
       <div>
        {props.user ?
        <button onClick={() => signOut()}>Sign out</button> :
        <button onClick={() => signIn()}>Sign in</button>}
        </div>
      </nav>
    )
}