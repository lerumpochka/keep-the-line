import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import db from "../../../database";
import { redirect } from "next/dist/server/api-utils";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {label: "User Name", type: "text", placeholder: "your name..."},
        email: { label: "Email", type: "text", placeholder: "your email..." },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials, req) {
        //to add in DB
        const [user, created] = await db.User.findOrCreate({
            where: {email: credentials.email},
            defaults: {password: credentials.password, name: credentials.username}
        })

        //check password if created===false
        if (!created && user.password === credentials.password) {
          return user
        } else if(created) { 
          return user
        } else { 
          return null
        }
        

      },
    }),
  ],
  secret: "secret", //protects our connection
};
export default NextAuth(authOptions);
