'use client';

import { useState, useEffect } from 'react';

export default function LeadCaptureOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    pageUrl: ''
  });

  useEffect(() => {
   
      setIsOpen(true);


  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Auto-populate page URL if not provided
    const finalFormData = {
      ...formData,
      pageUrl: formData.pageUrl || window.location.href
    };

    const response = await fetch('/api/lead-capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      throw new Error(result.message || 'Failed to submit form');
    }

    setCurrentStep(2);
      let filled = true;
    localStorage.setItem('winmarketing-lead', filled.toString());
  } catch (error) {
  const errorMessage = error instanceof Error 
    ? error.message 
    : 'There was an error submitting your form. Please try again.';
  alert(errorMessage);
} finally {
    setIsSubmitting(false);
  }
};

  const handleClose = () => {
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      pageUrl: ''
    });
    window.location.href = '/';
  };

  const createWhatsAppLink = () => {
    const message = `Hi! I just submitted a request for a website. I'd like to schedule a call to discuss details.`;
    return `https://wa.me/2348119188295?text=${encodeURIComponent(message)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed md:top-16 inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute md:-top-0 right-0 md:-left-10 -top-6 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Container */}
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
              style={{ width: currentStep === 1 ? '50%' : '100%' }}
            />
          </div>

          <div className="p-4">
            {currentStep === 1 ? (
              /* Step 1: Lead Capture */
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-200 mb-2">
                    Ready for a Better Website?
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Let me build you a high-converting website that grows your business
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black bg-opacity-50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black bg-opacity-50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp Number"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black bg-opacity-50 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="url"
                      name="pageUrl"
                      placeholder="Paste your website URL (optional)"
                      value={formData.pageUrl}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-black bg-opacity-50 backdrop-blur-sm"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      This helps us understand your current situation
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </button>
                </form>
              </div>
            ) : (
              /* Step 2: Thank You */
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-300 mb-2">
                    Thank You!
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Your website request has been received. I will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg border-2 border-gray-300/50 bg-white/10 backdrop-blur-sm px-3 md:px-6 py-3  text-base sm:text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:ring-4 focus:ring-gray-500/50 focus:outline-none dark:border-gray-600/50 dark:bg-gray-800/10 dark:text-gray-300 dark:hover:bg-gray-800/20"
                  >
                    Schedule Strategy Call via WhatsApp
                  </a>
                  
                  <button
                    onClick={handleClose}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-all"
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
  );
}