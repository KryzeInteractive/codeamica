import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginInput } from '../../types';
import api from '../../axios';

export const Route = createFileRoute('/login/')({
  component: Login,
})

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const { handleSubmit, register, setValue } = useForm<LoginInput>();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data: LoginInput) => {
    try {
      const response = api.post("/auth/login", data, { withCredentials: true })
      console.log(response)
    }
    catch(error) {
      console.log(error)
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Backspace") {
      setPassword((prev) => prev.substring(0, prev.length - 1));

    } else if (key.length === 1 && !e.ctrlKey && !e.metaKey) {
      setPassword((prev) => prev + key);

    } else {
      e.preventDefault();
    }

    setValue("password", password + (key === "Backspace" ? "" : key), {
      shouldValidate: true,
    });
  };
  return (
    <main className="flex w-dvw flex-col xl:flex-row">
      <div className="flex h-[calc(100dvh-54px)] w-full items-center justify-center md:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex w-[340px] flex-col justify-start gap-4 md:w-[25rem]"
        >
          <span className="font-bold leading-card">Login</span>
          <p className="leading-card">* Required field</p>
          <label
            htmlFor="email-username"
            className="flex flex-col gap-2 font-bold leading-card"
          >
            Email/Username *
            <input
              type="email"
              className="w-full rounded-[5px] border border-black px-[10px] py-2 font-normal leading-card"
              placeholder="placeholder@mail.com"
              {...register("email")}
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col gap-2 font-bold leading-card"
          >
            Password *
            <span className="absolute right-0 cursor-pointer font-normal leading-card">
              Forgot Password?
            </span>
            <div className='relative'>
              <input
                type="text"
                name="password"
                className="w-full rounded-[5px] border border-[var(--light-gray)] px-[10px] py-2"
                onChange={() => {}}
                onKeyDown={handleKeyDown}
                value={showPassword ? password : "*".repeat(password.length)}
              />
              <img
                src="assets/eye.svg"
                alt="eye"
                className="input-svg-top absolute right-[10px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
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
          <button
            className="w-full rounded-[5px] bg-black px-0 py-2 text-center text-white"
            type="submit"
          >
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
        </form>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-sky-950 md:block"></div>
    </main>
  );
}
