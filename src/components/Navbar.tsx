"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignoutButton } from "./SignoutButton";

export default function Navbar() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  console.log(session);
  if (session === null || session === undefined) {
    console.log("not log in yet");
  }

  return (
    <div>
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* Page logo and name */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="select-none self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Codeamica
            </span>
          </Link>

          {/* Open menu button for mobile */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex select-none flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <Link
                  href="/"
                  className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/learningPath"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Learning Path
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/courses"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Courses
                </Link>
              </li>
              {session === null ? (
                <>
                  <li>
                    <Link
                      href="/pages/login"
                      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/signup"
                      className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* Dropdown menu */}
                  <li className="relative">
                    <button
                      id="dropdownNavbarLink"
                      onClick={toggleDropdown}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    >
                      {session?.user?.name}
                      <svg
                        className="ms-2.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownNavbar"
                      className={`absolute z-10 ${isDropdownOpen ? "block" : "hidden"} w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                          <SignoutButton />
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
