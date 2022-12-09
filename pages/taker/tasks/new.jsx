import { getSession } from "next-auth/react";
import React from "react";
//import db from "../../../database";


function NewTask(props) {
  const user = props.user
console.log('-------', user);
  return (
    <div>
      <div>
        <div>
          <h1>Post task</h1>
          <form action="/api/tasks" method="POST">
            <input hidden name="UserId" defaultValue={user.id} />
            <label htmlFor="title">What to do:</label>
            <input type="text" id="title" name="title" placeholder="task name" required />
           <br/>
           <br/>
              <label>when:</label>
              <input type="date" name="date" id="date" />
            <br/>
              <label>at what timee:</label>
              <input type="time" name="time" id="time" />
           <br/>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" placeholder="address" required />
           <br/>
            <label htmlFor="amount">Amount to pay:</label>
            <input type="text" id="amount" name="amount" placeholder="how much?" required />
           <br/>
            <label htmlFor="description">Write some description:</label>
            <textarea id="description" name="description" rows="4" cols="30"></textarea>
           <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  if(!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F'}
    }
  }
  //const user = JSON.parse(JSON.stringify(await db.User.findOne({where: {email: session.user.email}})))
  const user = {id:1}
  return {
    props: { user, currentUser: session },
  };
}

export default NewTask;