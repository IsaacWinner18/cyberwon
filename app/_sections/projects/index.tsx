"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Exam Preps",
      slug: "exampreps",
      websiteUrl: "https://exampreps.ng",
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775648029/Screenshot_2026-04-08_123328_vvmjyt.png",
      summary:
        "A Comprehensive preparation platform for almost all major Nigerian examinations, recoreded 289 signups and 8 paying users.",
      role: "Full-stack Development",
      stack: ["Next.js", "Node.js", "Paystack", "MongoDB"],
    },
    {
      title: "Igiftways",
      slug: "igiftways",
      websiteUrl: "https://igiftways.com",
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775653217/Screenshot_2026-04-08_135959_ko3hvj.png",
      summary:
        "An idea developed out of the need for an infrastructure that empower communities with provably fair giveaways, Building lasting trust through transparent selection processes that eliminate doubt.",
      role: "Full-stack Development",
      stack: ["Next.js", "Node.js", "Paystack", "MongoDB"],
    },
    {
      title: "Earnstak",
      slug: "earnstak",
      websiteUrl: "https://earnstak.com",
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775340372/Screenshot_2026-04-04_230448_wumt7g.png",
      summary:
        "Headless payment and analytics archtecture for people that sell digital product online, Earnstak allows creators to sell on their own custom web page without any redirect",
      role: "Full-stack Development",
      stack: ["Next.js", "Node.js", "Paystack", "korapay", "MongoDB"],
    },
    {
      title: "Dben Real Estate",
      slug: "dben-real-estate",
      websiteUrl: "https://dbenrealestate.com",
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775340748/Screenshot_2026-04-04_231209_scjkvp.png",
      summary:
        "A highly modern Real Estate website, clean and minimalistic UI.",
      role: "Technical Lead",
      stack: ["Next.js", "Tailwind", "Contentful"],
    },
    {
      title: "Buychow",
      slug: "buychow",
      websiteUrl: "https://buychow.vercel.app",
      gitHub: false,
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775340849/Screenshot_2026-04-04_231353_kzppvo.png",
      summary:
        "A food delivery website, exclusively designed for the students of Achievers University (My Uni).",
      role: "Full-stack Development",
      stack: ["React", "Node.js", "Redis", "PostgreSQL"],
    },
    {
      title: "Moevan - Data subscription website",
      slug: "moevan-data-subscription",
      websiteUrl: "https://moevan.com",
      image:
        "https://res.cloudinary.com/dcvlszzoy/image/upload/q_auto/f_auto/v1775340920/Screenshot_2026-04-04_231506_o0jco6.png",
      summary: "Moevan is a data subscription and bills payment website.",
      role: "Front-end Development",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
    },
  ];

  return (
    <section id="projects-section" className="">
      <div className="max-w-4xl mx-auto">
        <div
          className={`mx-auto max-w-4xl px-2 text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            What I have been Building
          </h2>
        </div>

        <div className="mx-auto max-w-4xl grid gap-3 lg:grid-cols-2 px-3">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`relative rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 px-3 py-4 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-900/70 dark:border-blue-900/40 h-full flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col gap-3 flex-grow">
                <div className="relative overflow-hidden rounded-2xl border border-blue-200/40 bg-gradient-to-br from-blue-100/40 via-white/30 to-purple-100/40 dark:border-blue-900/40 dark:from-blue-950/40 dark:via-gray-950/40 dark:to-purple-950/40">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {project.summary}
                  </p>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div> */}
              </div>

              <div className="flex gap-3 items-center">
                <div className="py-2 px-4 flex justify-center items-center underline text-purple-400">
                  <Link
                    href={`${project.websiteUrl}`}
                    target="_blank"
rel="noopener"
                    className="inline-flex items-center text-md text-white hover:text-white/70 font-medium"
                  >
                    Visit site &#x2197;
                  </Link>
                </div>

                {/* <div>
                  <Image
                    src="/github-142-svgrepo-com.svg"
                    alt="Isaac Winner Github"
                    width={30}
                    height={30}
                  />
                  
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-white font-medium shadow-lg transition-all duration-300 hover:scale-105"
          >
            View all projects
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export { ProjectsSection };
export default ProjectsSection;
