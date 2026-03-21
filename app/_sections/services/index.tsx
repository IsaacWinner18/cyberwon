"use client"

import { useState, useEffect } from "react"
import { CheckIcon } from "lucide-react"

export interface ServicesProps {
  services: {
    title: string
    subtitle: string
    services: Array<{
      name: string
      price: string
      description: string
      features: string[]
      cta: {
        label: string
        href: string
      }
      popular?: boolean
    }>
  }
}

export function Services({ services }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 sm:py-32" id="services">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/50" />
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{services.subtitle}</p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
          {services.services.map((service) => (
            <div
              key={service.name}
              className={`relative flex flex-col rounded-3xl ${
                service.popular
                  ? "z-10 bg-white/80 backdrop-blur-md p-8 shadow-2xl ring-2 ring-purple-500/50 dark:bg-gray-900/80 dark:ring-purple-400/50 sm:p-10"
                  : "bg-white/60 backdrop-blur-md p-8 shadow-xl dark:bg-gray-900/60 sm:p-8"
              } transition-all duration-500 hover:shadow-2xl hover:scale-105`}
            >
              {service.popular && (
                <div className="absolute -top-5 right-0 left-0 mx-auto w-40 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-center text-sm font-medium text-white">
                  🔥 Most Popular
                </div>
              )}

              <div className="p-2">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    🚀 {service.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <p className="flex items-baseline gap-x-1">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {service.price}
                    </span>
                  </p>
                </div>

                <ul role="list" className="space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-400 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-green-500" aria-hidden="true" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.cta.href}
                  className={`inline-block w-full text-lg py-6 rounded-lg text-center ${
                    service.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg"
                      : "bg-white text-purple-600 ring-2 ring-inset ring-purple-200 hover:ring-purple-300 hover:bg-purple-50 dark:bg-gray-800 dark:text-purple-400 dark:ring-purple-800 dark:hover:bg-gray-700"
                  } transition-all duration-300 hover:scale-105`}
                >
                  {service.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-md border border-purple-200/50 p-6 dark:border-purple-800/50">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              <strong>Performance-based pricing available</strong> for proven offers.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/lead-capture"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Let me build your growth engine → Book Free Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
