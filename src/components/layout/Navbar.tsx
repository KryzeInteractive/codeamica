import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import LoginPopup from "../LoginPopup";
import SignupPopup from "../SignupPopup";
import SearchBar from "../ui/SearchBar";

const noDefaultLayoutRoutes = ["/login", "/sign-up"];
const navBarLink = [
  { href: "/", label: "Home" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/courses", label: "Courses" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  // Function to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex max-h-[54px] w-full flex-row items-center justify-between p-2">
      <div className="flex basis-2/5 flex-nowrap items-center gap-x-12">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/logo.svg"
            className="h-[20px] w-[130px] md:min-h-[24px] md:min-w-[173px]"
            alt="Codeamica Logo"
          />
        </Link>
        <ul className="hidden flex-row gap-6 font-medium sm:flex md:mt-0">
          {navBarLink.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                className={`${isActive(href) ? "font-bold underline" : "hover:font-bold hover:underline"} text-[.55rem] text-[var(--primary-text-color)] md:text-[1rem]`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {!noDefaultLayoutRoutes.includes(pathname) && (
        <>
          <div className="relative hidden basis-1/5 lg:block lg:basis-2/5">
            <SearchBar onChange={() => {}} />
          </div>
          <div className="relative flex w-full basis-1/5 justify-start px-6 md:justify-start lg:hidden">
            <img
              width={24}
              height={24}
              src="/assets/search.svg"
              alt="search-icon"
              className="relative h-[1rem] w-[1rem] md:h-[24px] md:w-[24px]"
            />
          </div>
          <div className="flex items-center justify-end gap-6 md:basis-auto">
            <button
              onClick={() => navigate({ to: "/login" })}
              className="text-[.55rem] font-bold md:text-[.75rem] lg:text-[1rem]"
            >
              Log in
            </button>
            <button
              onClick={() => navigate({ to: "/sign-up" })}
              className="max-h-fit rounded-[5px] bg-[var(--primary-text-color)] p-2 text-[.55rem] font-bold text-[var(--background)] underline md:text-[.75rem] lg:text-[1rem]"
            >
              Sign up
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
