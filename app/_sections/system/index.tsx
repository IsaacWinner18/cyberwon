"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function System() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("education");
  const [overlay, setOverlay] = useState<{
    file: string;
    type: "image" | "pdf";
    name: string;
  } | null>(null);

  type SystemCard = {
    title: string;
    description: string;
    date?: string;
    subtitle?: string;
  };

  const tabs = [
    { id: "education", label: "EDUCATION", number: "01" },
    { id: "skills", label: "SKILLS", number: "02" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("system-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillsData: SystemCard[] = [
    {
      title: "Javascript Engineer",
      description:
        "Deep knowledge of JavaScript, modern ES modules, async patterns, and robust app architecture.",
    },
    {
      title: "Frontend Engineer",
      description:
        "Build responsive UI with React/Next.js, accessibility, and pixel-perfect design handoffs.",
    },
    {
      title: "Backend Engineer",
      description:
        "API design, database modeling, serverless and container-based infrastructure for scalable systems.",
    },
    {
      title: "Blockchain Developer (TON)",
      description:
        "Develop smart contracts, wallets, and dApp integrations for The Open Network (TON) ecosystem.",
    },
  ];

  const educationData: SystemCard[] = [
    {
      title: "Computer Science Student",
      subtitle: "Achievers University",
      date: "2025 - Present",
      description:
        "Currently pursuing a B.Sc. in Computer Science with hands-on full-stack and algorithms training.",
    },
    {
      title: "Frontend Course",
      subtitle: "SoloLearn",
      date: "2022 - 2023",
      description:
        "Completed a frontend course focused on HTML, CSS, JavaScript, and modern UI patterns.",
    },
    {
      title: "Full Stack Program",
      subtitle: "Oracus Digital Agency",
      date: "2023 - 2024",
      description:
        "Completed an immersive full stack development program including React, Node.js, and deployment workflows.",
    },
    {
      title: "Lifelong Learner",
      subtitle: "Ongoing",
      date: "Present",
      description:
        "Always staying current with the evolving tech ecosystem through continuous learning, reading, and practice.",
    },
  ];

  interface CertificationItem {
    name: string;
    issuer: string;
    file: string;
    type: "image" | "pdf";
  }

  interface CertificationCard {
    title: string;
    items: CertificationItem[];
  }

  const CertificationCards: CertificationCard[] = [
    {
      title: "Cloud & Infrastructure",
      items: [
        {
          name: "AWS Solutions Architect",
          issuer: "Amazon Web Services",
          file: "/certs/aws-solutions-architect.png",
          type: "image",
        },
        {
          name: "Google Cloud Professional",
          issuer: "Google Cloud",
          file: "/certs/gcp.pdf",
          type: "pdf",
        },
      ],
    },
  ];

  return (
    <section id="system-section" className="overflow-hidden">
      <div className="max-w-4xl flex justify-center items-center mx-auto py-16">
        <div className=" bg-[#9a79b5]/5 rounded-2xl md:p-10 p-4 shadow-lg relative">
          {/* Top Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex bg-[#9a79b5]/10 backdrop-blur-xl rounded-full px-2 py-2 space-x-6 text-sm text-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-purple-700 text-white"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-70">{tab.number}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(activeTab === "skills" ? skillsData : educationData).map(
              (item) => (
                <div
                  key={item.title}
                  className=" p-4 md:p-5 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    {item.date && (
                      <span className="bg-[#123a6b] text-xs px-3 py-1 rounded-full text-gray-300">
                        {item.date}
                      </span>
                    )}
                  </div>
                  {item.subtitle && (
                    <p className="text-[#4da3ff] text-sm mb-2">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div
            className={`text-center mb-10 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Certifications
            </h2>
            <p className="text-md text-gray-300">
              A snapshot of my certifications.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {CertificationCards.map((card, index) => (
              <div
                key={card.title}
                className={`transition-all duration-1000 delay-${index * 200} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="p-4 md:p-5 h-full">
                  {/* <h3 className="text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3> */}

                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 group"
                      >
                        {/* Left: cert info */}
                        <div className="flex items-start gap-3 min-w-0">
                          <span className="text-green-400 mt-1 shrink-0">
                            ✓
                          </span>
                          <div className="min-w-0">
                            <p className="text-white font-medium leading-tight truncate">
                              {item.name}
                            </p>
                            <p className="text-gray-500 text-sm mt-0.5 truncate">
                              {item.issuer}
                            </p>
                          </div>
                        </div>

                        {/* Right: View button */}
                        <button
                          onClick={() =>
                            setOverlay({
                              file: item.file,
                              type: item.type,
                              name: item.name,
                            })
                          }
                          className="shrink-0 flex items-center gap-1.5 text-sm text-green-400 border border-green-400/30 rounded-full px-3 py-1 hover:bg-green-400/10 hover:border-green-400 transition-all duration-200 group-hover:opacity-100 opacity-60"
                        >
                          View
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-screen overlay */}
        {overlay && (
          <div
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
            onClick={() => setOverlay(null)}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white font-medium text-sm">{overlay.name}</p>
              <button
                onClick={() => setOverlay(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center p-6"
              onClick={() => setOverlay(null)}
            >
              {overlay.type === "image" ? (
                <img
                  src={overlay.file}
                  alt={overlay.name}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <iframe
                  src={overlay.file}
                  title={overlay.name}
                  className="w-full h-full max-w-5xl rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        )}
      </>
    </section>
  );
}

export { System };
export default System;
