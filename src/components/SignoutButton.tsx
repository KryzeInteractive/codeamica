"use client";
import { signOut } from "next-auth/react";

export function SignoutButton() {
  return (
    <button
      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
