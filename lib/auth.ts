import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { cache } from "react";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, Google],
});

/**
 * Get the current user session. use only in server components.
 */
export const getSession = cache(auth);
