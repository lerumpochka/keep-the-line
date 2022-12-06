import { getSession } from "next-auth/react"
import db from "../database"

export default function Home(props) {

  return (
    <>
      <h1>Empty Next App</h1>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req)
  
  return {
    props: { currentUser: session }
  }
}

