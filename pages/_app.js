import React from "react";
import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// import Navbar from '../components/navbar';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      {/* <Navbar user={pageProps.currentUser}></Navbar> */}
      {/* <SessionProvider session={session}> */}

      <Component {...pageProps} />

      {/* </SessionProvider> */}
    </>
  );
}

export default MyApp;
