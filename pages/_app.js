import React from "react";
import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";
import Oops from "../components/Oops/Oops";
import Header from "../components/Header";

// import { SessionProvider } from "next-auth/react";
// import Navbar from '../components/navbar';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      {/* <Navbar user={pageProps.currentUser}></Navbar> */}
      {/* <SessionProvider session={session}> */}

      {matches ? (
        <Oops />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}

      {/* </SessionProvider> */}
    </>
  );
}

export default MyApp;
