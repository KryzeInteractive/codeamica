import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpInput } from '../../types';

export const Route = createFileRoute('/sign-up/')({
  component: SignUp
})

function SignUp() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { handleSubmit, register, setValue } = useForm<SignUpInput>({defaultValues: {name: "user", provided_role: "user"}});
  const [errors, setErrors] = useState({email: "", password: "", confirmPassword: ""});
  const onSubmit = async (data: SignUpInput) => {
      if (password !== confirmPassword) {
        setErrors(prev => {return {
          ...prev,
          confirmPassword: "Passwords do not match."
        };})

      }
      console.log(data)
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
          <span className="font-bold leading-card">Sign Up</span>
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
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              />
            </div>
          </label>
          <label
            htmlFor="confirm-password"
            className="flex flex-col gap-2 font-bold leading-card"
          >
            Confirm Password *
            <div className="relative">
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
                value={
                  showConfirmPassword
                    ? confirmPassword
                    : "*".repeat(confirmPassword.length)
                }
              />
              <img
                src="assets/eye.svg"
                alt="eye"
                className="input-svg-top absolute right-[10px] cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword((prev) => !prev);
                }}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </label>
          <button className="w-full rounded-[5px] bg-black px-0 py-2 text-center text-white">
            Sign Up
          </button>
          <hr className="w-full border-black" />
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card">
            <img src="/assets/github-logo.svg" alt="github-logo" />
            Sign Up with Github
          </button>
          <button className="flex justify-center gap-3 rounded-[5px] border border-black px-0 py-2 font-bold leading-card">
            <img src="/assets/google-logo.svg" alt="google-logo" />
            Sign Up with Google
          </button>
          <p className="text-center">
            Already have an account?&nbsp;
            <Link className="underline" to={"/login"}>
              Login
            </Link>
          </p>
          <div className="mt-4 text-center">
            <p className="leading-card">
              By signing up, you agree to Codeamica’s
            </p>
            <p className="flex justify-center gap-2 leading-card">
              <span className="font-bold underline">Terms of Service</span>
              <span className="no-underline">&</span>
              <span className="font-bold underline">Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
      <div className="absolute right-0 top-0 hidden h-screen w-1/2 bg-sky-950 md:block"></div>
    </main>
  );  
}
