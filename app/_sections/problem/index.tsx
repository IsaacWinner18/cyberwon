"use client";

import { useState, useEffect } from "react";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";

export interface ProblemProps {
  problem: {
    title: string;
    problems: Array<{
      title: string;
      description: string;
    }>;
  };
}

function Problem({ problem }: ProblemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("problem-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 sm:py-32" id="problem-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-red-50/30 dark:from-gray-950 dark:to-red-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#ef444440_2px,transparent_2px)] [background-size:32px_32px] dark:bg-[radial-gradient(#ef444430_2px,transparent_2px)]" />
      </div>


      <div className=" mx-auto px-2 ">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-16 ">
            {problem.title}
          </h2>

          <div className="grid gap-3 md:gap-6 md:gap-12 mb-16">
            {problem.problems.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-red-200/50 px-2 py-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900/60 dark:border-red-800/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                        <XCircleIcon
                          className="h-8 w-8 text-red-600 dark:text-red-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Problem };
export default Problem;
