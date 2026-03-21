"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface FAQProps {
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function FAQ({ faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-gray-950" />
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            {faq.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-200 dark:divide-gray-800">
          {faq.questions.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-start justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180 transform" : ""
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                className={`accordion-content mt-2 pr-12 ${
                  openIndex === index ? "block" : "hidden"
                }`}
                data-state={openIndex === index ? "open" : "closed"}
              >
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
