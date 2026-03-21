interface CaseStudiesProps {
  caseStudies: {
    title: string
    subtitle: string
    cases: Array<{
      result: string
      client: string
      description: string
      image: string
    }>
  }
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section className="relative py-24 sm:py-32" id="case-studies">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-yellow-50/30 dark:from-gray-950 dark:to-yellow-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b20_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#f59e0b10_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {caseStudies.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {caseStudies.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {caseStudies.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-gray-900/70 dark:border-gray-700/50">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={`${caseStudy.client} results`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 sm:p-12">
                    <div className="mb-6">
                      <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400 mb-4">
                        ✅ Success Story
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {caseStudy.result}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        <strong>{caseStudy.client}</strong>
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    <blockquote className="border-l-4 border-yellow-400 pl-6 italic text-gray-700 dark:text-gray-300">
                      "We got {caseStudy.result.toLowerCase()} with
                      WinMarketing's system."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative rounded-3xl bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-md border border-yellow-200/50 p-8 sm:p-12 dark:border-yellow-800/50">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Ready to be our next success story?
            </p>
            <a
              href="/lead-capture"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 px-6 md:px-8 py-4 text-lg font-medium text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
