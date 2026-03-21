"use client";

import { useEffect, useState } from "react";
import TechStack from "../tech-stack";
import ProjectsSection from "../projects";
import System from "../system";
import Link from "next/link";
import { Syne } from "next/font/google";
import BookCall from "../book-call";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne",
});

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`overflow-hidden min-h-screen relative"
      aria-labelledby="hero-heading ${syne.className}`}
    >
      {/* Background elements - keep these outside the animated container */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-950 dark:to-purple-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#9333ea40_2px,transparent_2px)] [background-size:32px_32px] dark:bg-[radial-gradient(#9333ea30_2px,transparent_2px)]" />
      </div>

      {/* Animated container */}
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        {/* Main content container with gradient background */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm dark:border-blue-800/50">
          <div className="flex flex-col items-center gap-8 h-full">
            {/* Left border container - this now only contains the profile and tech stack */}
            <div className="border-l border-r border-white/10 p-4 py-4 pl-4 md:pr-40 mx-auto max-w-4xl">
              {/* Profile section */}
              <div className="flex-shrink-0 self-center md:self-start pt-6">
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/dw30uzdxp/image/upload/v1757326846/1757326829303_zqu37j.jpg"
                    alt="Isaac Winner, Full-stack Developer"
                    className="object-cover group-hover:brightness-110 transition-all duration-300 h-52 w-52 rounded-full border-4 border-white/20 shadow-xl"
                    style={{ objectPosition: "center center" }}
                  />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur rounded-full group-hover:opacity-30 transition-opacity"></div>
                </div>
              </div>

              {/* Intro text */}
              <div className="w-full max-w-3xl mb-4">
                <div className="font-bold my-6">
                  <p className="text-white text-3xl bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text pt-2">
                    Hi, I'm Isaac Winner
                  </p>
                  <p className="text-neutral-200 text-2xl leading-[26px] ">
                    Senior Full-stack Developer
                  </p>
                </div>
                <div className="space-y-3 text-base md:text-xl text-gray-700">
                  <p className="leading-relaxed text-sm text-left max-w-[490px]">
                    <span className="font-light text-gray-300 ">
                      I enjoy building fast, reliable, and production-ready
                      software products with clean UX and resilient back-end
                      systems.
                    </span>
                  </p>
                  <div className="my-12 pt-2 flex flex-row items-center gap-2 md:gap-4">
                    <Link
                      href="#book-call"
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 md:px-6 py-4"
                    >
                      Hire Me!
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tech Stack - still inside bordered container */}
              <TechStack />
            </div>

            <section className="w-full py-24 ">
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent dark:via-purple-950/10" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  {" "}
                  {/* Added ml-60 to align with the bordered content */}
                  <p className="text-sm uppercase tracking-widest text-purple-500 dark:text-purple-300 mb-4">
                    About Me
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Hi, I’m Isaac Winner, a software developer with 4+ years
                      of experience building across frontend, backend, automated
                      systems, bots, and digital product infrastructure.
                    </p>

                    <p>
                      I approach development through systems thinking,
                      structuring code, architecture, and user flows for
                      efficiency and reliability.
                    </p>

                    <p>
                      I thrive where product, engineering, and execution
                      intersect, turning raw ideas into usable systems. My
                      priorities go beyond building features, I focus on
                      creating outcomes that scale, perform, and endure.
                    </p>

                    <p>
                      Alongside hands-on building, I enjoy documenting and
                      sharing knowledge, breaking down complex technical
                      concepts for teammates and the wider community.
                    </p>

                    <p>
                      I’m also the founder of Earnstak, a headless checkout and
                      analytics platform for creators. Earnstak keeps custom
                      sales pages intact and drops seamless, instant checkout
                      directly in, no redirects, no rebuilding, buyers can pay
                      without ever leaving the site.
                    </p>

                    <p>
                      I’m passionate about delivering thoughtful products,
                      simplifying the complex, and driving meaningful results.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <ProjectsSection />
            <System />

            <BookCall />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
export default Hero;
