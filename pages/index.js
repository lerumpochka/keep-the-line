import { getSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import HomePage from "../components/HomePage";

// import Login from "./login";

export default function Home(props) {
  const session = props.currentUser;
  

  if (session) {
    return (
      <div>
        <HomePage />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <HomePage />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
}


  export async function getServerSideProps(req, res) {
    const session = await getSession(req);
    
  return {
    props: { currentUser: session  },
  };
}