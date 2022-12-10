import React from "react";
import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";
import Oops from "../components/Oops/Oops";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps: {session, ...pageProps } }) {
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
          <Navbar />
        </>
      )}

      {/* </SessionProvider> */}
    </>
  );
}

export default MyApp;
