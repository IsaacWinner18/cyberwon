"use client";

import { useState, useEffect } from "react";

export default function BookCall() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const finalFormData = {
        ...formData,
      };

      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          // Handle duplicate record
          alert(`This lead already exists in our system. ${result.message}`);
          return;
        }
        throw new Error(result.message || "Failed to submit form");
      }

      setCurrentStep(2);
      let filled = true;
      localStorage.setItem("winmarketing-lead", filled.toString());
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "There was an error submitting your form. Please try again.";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const createWhatsAppLink = () => {
    const message = `Hi! I just submitted a request for an opportunity. I'd like to schedule a call to discuss details.`;
    return `https://wa.me/2348119188295?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="max-w-4xl mx-auto" id="book-call">
      <section className="py-10 text-white ">
        <div className="rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <div className="relative p-4 md:p-8">
            {/* Form Container */}
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-200">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                  style={{ width: currentStep === 1 ? "50%" : "100%" }}
                />
              </div>

              <div className="p-4">
                {currentStep === 1 ? (
                  /* Step 1: Lead Capture */
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Let's Talk
                      </h3>
                     
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="md:flex md:space-x-4 mb-2 w-[300px] md:w-full">
                        <div className="md:flex-1 mb-2 md:mb-0">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-900 text-white placeholder-gray-400"
                          />
                        </div>

                        <div className="md:flex-1">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-900 text-white placeholder-gray-400"
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-900 text-white placeholder-gray-400 resize-none"
                          rows={4}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-700 to-purple-600 text-white py-3 px-4  font-medium hover:from-purple-700 hover:to-purple-600 transition-all disabled:opacity-50 mt-4"
                      >
                        
                        {isSubmitting ? "Submitting..." : "Reach Out"}
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Step 2: Thank You */
                  <div className="text-center space-y-6 py-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-10 h-10 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-300 mb-2">
                        Thank You!
                      </h2>
                      <p className="text-gray-400">I will respond soonest</p>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={createWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full border-2  bg-purple-600 backdrop-blur-sm px-3 md:px-6 py-3  text-base sm:text-lg font-medium text-white transition-all duration-300 hover:bg-purple/20 hover:scale-105"
                      >
                        Schedule a Call via WhatsApp
                      </a>

                      <button
                        onClick={() => setCurrentStep(1)}
                        className="w-full bg-gray-100/10 text-gray-100 py-3 px-4 rounded-lg font-medium hover:bg-gray-200/20 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
