import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { useMediaQuery } from "@mui/material";
import Oops from "../components/Oops/Oops";
import Header from "../components/Header";
import { getSession, SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import Login from "./Login";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const matches = useMediaQuery("(min-width:600px)");

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => setUser(await getSession()))();
  }, []);

  console.log(user);

  return (
    <>
      <SessionProvider session={session}>
        {matches ? (
          <Oops />
        ) : (
          <>
            {user ? (
              <>
                <Header />
                <Component {...pageProps} />
                <Navbar />
              </>
            ) : (
              <Login />
            )}
          </>
        )}
      </SessionProvider>
    </>
  );
}
export default MyApp;
