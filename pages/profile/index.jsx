import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <div>
      <h1>profile page</h1>
      <Link href="/profile/keeper/tasks"> My booked tasks --Keeper</Link>
      <br/>
      <Link href="/profile/taker/tasks"> My posted tasks --Taker</Link>
      
    </div>
  );
}

export default Profile;
