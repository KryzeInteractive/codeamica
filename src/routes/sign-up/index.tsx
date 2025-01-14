import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/sign-up/')({
  component: SignUp
})

function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <main className="flex h-dvh w-dvw flex-col xl:flex-row">
      <div className="hidden h-full w-full bg-sky-950 md:block"></div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-[340px] flex-col justify-start gap-4 md:w-auto md:gap-6">
          <span className="font-bold leading-card">Sign Up</span>
          <p className="leading-card">* Required field</p>
          <label
            htmlFor="email-username"
            className="flex flex-col gap-2 font-bold leading-card"
          >
            Email/Username *
            <input
              type="email"
              name="email-username"
              className="w-full rounded-[5px] border border-black px-[10px] py-2 font-normal leading-card"
              placeholder="placeholder@mail.com"
            />
          </label>
          <label
            htmlFor="password"
            className="relative flex flex-col gap-2 font-bold leading-card"
          >
            Password *
            <input
              type="text"
              name="password"
              className="w-full rounded-[5px] border border-[var(--light-gray)] px-[10px] py-2"
              onChange={() => {}}
              onKeyDown={(e) => {
                e.key === "Backspace"
                  ? setPassword((prev) => prev.substring(0, prev.length - 1))
                  : setPassword((prev) => (prev += e.key));
              }}
              value={"*".repeat(password.length)}
            />
            <img
              src="assets/eye.svg"
              alt="eye"
              className="input-svg-top absolute right-[10px] top-1/2"
            />
          </label>
          <label
            htmlFor="confirm-password"
            className="relative flex flex-col gap-2 font-bold leading-card"
          >
            Confirm Password *
            <input
              type="text"
              name="confirm-password"
              className="w-full rounded-[5px] border border-[var(--light-gray)] px-[10px] py-2"
              onChange={() => {}}
              onKeyDown={(e) => {
                e.key === "Backspace"
                  ? setConfirmPassword((prev) =>
                      prev.substring(0, prev.length - 1),
                    )
                  : setConfirmPassword((prev) => (prev += e.key));
              }}
              value={"*".repeat(confirmPassword.length)}
            />
            <img
              src="assets/eye.svg"
              alt="eye"
              className="input-svg-top absolute right-[10px] top-1/2"
            />
          </label>
          <button className="w-full rounded-[5px] bg-black px-0 py-2 text-center text-white md:px-40">
            Sign Up
          </button>
          <hr className="w-full border-black" />
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card md:px-40">
            <img src="/assets/github-logo.svg" alt="github-logo" />
            Sign Up with Github
          </button>
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card md:px-40">
            <img src="/assets/google-logo.svg" alt="google-logo" />
            Sign Up with Google
          </button>
          <p className="text-center">
            Already have an account?&nbsp;
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );  
}
