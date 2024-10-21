"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500); // Delay to animate content appearance
  }, []);

  return (
    <div>
      <main>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
          {/* Animated Background */}
          <div
            className="absolute inset-0 z-0 animate-pulse bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url(/path/to/your-image.jpg)" }}
          ></div>

          {/* Logo and Title */}
          <div
            className={`relative z-10 transform transition-all duration-1000 ${showContent ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
          >
            {/* <img
              src="/codeamica-logo.png"
              alt="Codeamica Logo"
              className="mb-6 h-32 w-32"
            /> */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Welcome to Codeamica
            </h1>
            <p className="max-w-2xl text-center text-xl font-light md:text-2xl">
              A free, community-driven platform offering high-quality
              educational content and a structured roadmap to guide your
              learning journey.
            </p>
          </div>

          {/* Animated CTA Button */}
          <div
            className={`relative z-10 mt-8 transform transition-all duration-1000 ${showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-500 transition-all duration-300 hover:bg-gray-200"
              href="/pages/courses"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
