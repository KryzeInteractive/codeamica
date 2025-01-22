import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/login/')({
  component: Login,
})

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const goBack = () => {
    window.history.back();
  }
  return (
    <main className="flex w-dvw flex-col xl:flex-row">
      <div className="flex h-[calc(100dvh-54px)] w-full items-center justify-center md:w-1/2">
        <div className="relative flex w-[340px] flex-col justify-start gap-4 md:w-[25rem]">
          <img
            src="assets/close.svg"
            alt="close-icon"
            width={16}
            height={16}
            className="absolute right-0 top-2 cursor-pointer"
            onClick={goBack}
          />
          <span className="font-bold leading-card">Login</span>
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
            <span className="absolute right-0 cursor-pointer font-normal leading-card">
              Forgot Password?
            </span>
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
              className="input-svg-top absolute right-[10px] top-1/2 cursor-pointer"
            />
          </label>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              width="24"
              height="24"
              onChange={() => {
                setRememberMe((prev) => !prev);
              }}
              checked={rememberMe}
            />
            <span>Remember me</span>
          </div>
          <button className="w-full rounded-[5px] bg-black px-0 py-2 text-center text-white">
            Continue
          </button>
          <hr className="w-full border-black" />
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card">
            <img src="/assets/github-logo.svg" alt="github-logo" />
            Continue with Github
          </button>
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card">
            <img src="/assets/google-logo.svg" alt="google-logo" />
            Continue with Google
          </button>
          <p className="text-center">
            Don't have an account?&nbsp;
            <Link className="underline" to={"/sign-up"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-sky-950 md:block"></div>
    </main>
  );
}
