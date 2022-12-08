import { getSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import HomePage from "../components/Home/HomePage";

// import Login from "./login";

export default function Home(props) {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
  const session = props.currentUser;

  if (session) {
    return (
      <div>
        <Header />

        <HomePage />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <HomePage />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);

  return {
    props: { currentUser: session },
  };
}
