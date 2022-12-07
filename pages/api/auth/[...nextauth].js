import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import db from "../../../database";
import { redirect } from "next/dist/server/api-utils";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your email..." },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials, req) {
        //to add in DB
        const [user, created] = await db.User.findOrCreate({
            where: {email: credentials.email},
            defaults: {password: credentials.password}
        })

        //check password if created===false
        if (!created && user.password === credentials.password) {
          console.log('---pass ok');
        } else { 
          console.log('wrong pass')
          // return 
            // redirect: {
            //   permanent: false,
            //   destination: `login`
            // }
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
