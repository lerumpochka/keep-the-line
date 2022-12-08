import { useMediaQuery } from "@mui/material";
import { getSession } from "next-auth/react";
import Header from "../components/Header/Header";
import HomePage from "../components/Home/HomePage";
import Oops from "../components/Oops/Oops";
// import Login from "./login";

export default function Home(props) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      {matches ? (
        <Oops />
      ) : (
        <>
          <Header />
          <HomePage />
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  return {
    props: { currentUser: session },
  };
}
