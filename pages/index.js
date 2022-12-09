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
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
        },
      };
    }


  return {
    props: { currentUser: session },
  };
}