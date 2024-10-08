import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { signInSchema } from "@/lib/zod";

import { loginUser } from "@/utils/api/loginUtils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // const email = credentials?.email as string;
        // const password = credentials?.password as string;
        const { email, password } = await signInSchema.parseAsync(credentials);

        if (!email || !password) {
          throw new Error("Please provide both email and password");
        }

        try {
          // Call the loginUser function from the external file
          const user = await loginUser(email, password);

          // Check if the user exists
          if (!user) {
            throw new Error("User not found.");
          }

          // Return the user object
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
