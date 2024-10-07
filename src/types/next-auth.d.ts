// next-auth.d.ts
import NextAuth from "next-auth";

// Extend the User interface
declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    role: string;
  }
}
