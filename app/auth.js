import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { authConfig } from "./authConfig";
import { connectToDb } from "./lib/utils";
import { User } from "./lib/models";

const login = async function (credentials) {
  try {
    connectToDb();

    const user = await User.findOne({ username: credentials.username }).exec();

    console.log(user);

    if (!user) {
      console.log("No user");
      throw new Error("Wrong Username or Password");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      console.log("wrong password");
      throw new Error("Wrong Username or Password");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log(credentials);
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
