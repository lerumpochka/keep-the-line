import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import Navbar from '../components/navbar';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
    <Navbar user={pageProps.currentUser}></Navbar>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp