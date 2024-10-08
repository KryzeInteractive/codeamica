"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LogInForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const credentialsAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.currentTarget);

    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Reset error and success states
    setError(null);

    // Sign in with credentials
    const result = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false, // Handle redirect manually
    });

    if (result?.error) {
      // Handle any error during sign-in
      setError(result.error);
    } else {
      // Sign-in was successful
      console.log("log in successful");
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={credentialsAction}
      className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-6 text-center text-2xl font-bold">Log In</h2>
      <label htmlFor="credentials-email" className="mb-2 block">
        Email
        <input
          type="email"
          id="credentials-email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label htmlFor="credentials-password" className="mb-4 block">
        Password
        <input
          type="password"
          id="credentials-password"
          name="password"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 p-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Sign In
      </button>

      {error && (
        <p className="mt-4 text-center text-red-600">
          check email or password, error: {error}
        </p>
      )}

      {/* {success && (
        <p className="mt-4 text-center text-green-600">Login successful!</p>
      )} */}
    </form>
  );
}
