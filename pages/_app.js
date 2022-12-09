import React from "react";
import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";
import Oops from "../components/Oops/Oops";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps } }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <SessionProvider session={session}>
        {matches ? (
          <Oops />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        )}
      </SessionProvider>
    </>
  );
}

export default MyApp;
