import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import db from "../../../database";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "your username..." },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials, req) {
        //to add in DB
        // const user = await db.User.create({
        //   name: credentials.username,
        //   password: credentials.password,
        // })
        const user = {
            name: credentials.username,
            password: credentials.password,
        }
        if(user) {
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
