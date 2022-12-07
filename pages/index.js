import { getSession } from "next-auth/react";
import Link from "next/link";
import Login from "./login";

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
      <Link href="/tasks/1">task details page</Link>
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
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  return {
    props: { currentUser: session },
  };
}
