import { getSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import HomePage from "../components/Home/HomePage";

// import Login from "./login";

export default function Home(props) {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/login">login page</Link>
      <br />
      <br />
      <Link href="/profile">Profile page</Link>
      <br />
      <br />
      <Link href="/tasks">All tasks around</Link>
      <br />
      <br />
      <Link href="/tasks/12">task details page</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks">All Keeper tasks</Link>
      <br />
      <br />
      <Link href="/profile/keeper/tasks/34">Keeper task details page</Link>
      <br />
      <br />
      <Link href="/tasks/new">Create new task-- form</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks">All taker Tasks</Link>
      <br />
      <br />
      <Link href="/profile/taker/tasks/32">Taker task details page</Link>
      <Header />
      <HomePage />
    </div>
  );
  const session = props.currentUser

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
