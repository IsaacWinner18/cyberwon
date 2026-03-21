"use client"

import { useState, useEffect } from "react"

export interface WhoItsForProps {
  whoItsFor: {
    title: string
    subtitle: string
    avatars: Array<{
      title: string
      description: string
      image: string
    }>
    conclusion: string
  }
}

function WhoItsFor({ whoItsFor }: WhoItsForProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("who-its-for-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="who-its-for-section" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366F1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            {whoItsFor.title}
          </h2>
          <p className="text-md text-gray-300">{whoItsFor.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {whoItsFor.avatars.map((avatar, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group h-full">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <div className="flex items-start mb-4">
                  <span className="text-green-400 mr-3 mt-1 text-xl">✅</span>
                  <h3 className="text-xl font-semibold text-white">{avatar.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{avatar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <p className="text-xl sm:text-2xl text-white font-medium">
              {whoItsFor.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhoItsFor }
export default WhoItsFor
