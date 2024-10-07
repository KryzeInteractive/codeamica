import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
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
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        let user = null;

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
          // Ensure proper error handling for unknown type
          if (error instanceof Error) {
            throw new Error(error.message || "Login failed");
          } else {
            throw new Error("An unexpected error occurred");
          }
        }
      },
    }),
  ],
});
