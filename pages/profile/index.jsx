import { getSession } from "next-auth/react";
import React from "react";

function Profile() {
  return (
    <div>
      <h1>profile page</h1>
      <p>User information</p>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
      },
    };
  }
return {
  props: { currentUser: session },
};
}

export default Profile;
