import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import LoginPopup from "../LoginPopup";
import SignupPopup from "../SignupPopup";
import SearchBar from "../ui/SearchBar";

export default function Navbar() {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);

  const navBarLink = [
    { href: "/", label: "Home" },
    { href: "/roadmaps", label: "Roadmaps" },
    { href: "/courses", label: "Courses" },
  ];

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
          className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0"
        >
          <img
            src="/assets/logo.svg"
            className="h-[20px] w-[130px] md:min-h-[24px] md:min-w-[173px]"
            alt="Codeamica Logo"
          />
        </Link>
        <ul className="hidden font-medium md:mt-0 sm:flex flex-row gap-6">
          {navBarLink.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                className={`${isActive(href) ? "font-bold underline" : "hover:font-bold hover:underline"} text-[.55rem] md:text-[1rem] text-[var(--primary-text-color)]`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative hidden basis-1/5 lg:basis-2/5 lg:block">
        <SearchBar onChange={() => {}} />
      </div>
      <div className="relative flex w-full basis-1/5 justify-start px-6 md:justify-start lg:hidden">
        <img
          width={24}
          height={24}
          src="/assets/search.svg"
          alt="search-icon"
          className="relative w-[1rem] h-[1rem] md:w-[24px] md:h-[24px]"
        />
      </div>
      <div className="flex items-center justify-end gap-6 md:basis-auto">
        <button
          onClick={() => setLoginPopupOpen(true)}
          className="text-[.55rem] font-bold md:text-[.75rem] lg:text-[1rem]"
        >
          Log in
        </button>
        <button
          onClick={() => setSignupPopupOpen(true)}
          className="max-h-fit rounded-[5px] bg-[var(--primary-text-color)] p-2 text-[.55rem] font-bold text-[var(--background)] underline md:text-[.75rem] lg:text-[1rem]"
        >
          Sign up
        </button>
      </div>

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setLoginPopupOpen(false)}
      />

      <SignupPopup
        isOpen={isSignupPopupOpen}
        onClose={() => setSignupPopupOpen(false)}
      />
    </nav>
  );
}
