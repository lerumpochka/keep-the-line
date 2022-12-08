import { getSession } from "next-auth/react";
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
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  return {
    props: { currentUser: session },
  };
}
