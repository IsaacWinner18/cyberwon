"use client";

import { useEffect, useState } from "react";
import {
  ExpressIcon,
  JsIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
} from "./tech-stack-icons";

const stackItems = [
  { name: "Node.js", icon: NodeIcon, color: "#68D391" },
  { name: "JavaScript", icon: JsIcon, color: "#F7DF1E" },
  { name: "Python", icon: PythonIcon, color: "#3776AB" },
  { name: "React", icon: ReactIcon, color: "#61DAFB" },
  { name: "Next.js", icon: NextIcon, color: "#FFFFFF" },
  { name: "Tailwind", icon: TailwindIcon, color: "#06B6D4" },
  { name: "Express", icon: ExpressIcon, color: "#E5E7EB" },
  { name: "MongoDB", icon: MongoIcon, color: "#47A248" },
  { name: "PostgreSQL", icon: PostgresIcon, color: "#336791" },
];

function TechStack() {
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

    const element = document.getElementById("tech-stack-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack-section" className="relative mt-10">
        <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/30 dark:from-gray-950 dark:to-purple-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#9333ea40_2px,transparent_2px)] [background-size:32px_32px] dark:bg-[radial-gradient(#9333ea30_2px,transparent_2px)]" />
      </div>

      <div className="">

        <div
          className={`grid grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden p-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } transition-all duration-1000`}
        >
          {stackItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group relative border-b border-r border-white/10 p-6 sm:p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm  transition-colors duration-300"
                style={{ ["--icon-color" as string]: item.color }}
              >
                <div className="flex items-center flex-col md:flex-row gap-4">
                  <div className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Icon className="w-10 h-10 md:w-14 md:h-10 transition-all duration-300 grayscale opacity-80 text-white/50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-[var(--icon-color)]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { TechStack };
export default TechStack;
