import Link from "next/link";
import { siteData } from "@/lib/data/site";

export function Footer() {
  return (
    <footer
      className="relative border-t border-gray-200/50 bg-white/50 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/50"
      role="contentinfo"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 transition-all duration-300"
              aria-label={`${siteData.site.name} homepage`}
            >
              Isaac Winner
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {siteData.site.description}
            </p>

            {/* Social links */}
            <div className="mt-6 flex space-x-4">
              <a
                href={siteData.site.social.twitter}
                className="group text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                href={siteData.site.social.linkedin}
                className="group text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href={siteData.site.social.whatsapp}
                className="group text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>

              <a
                href={siteData.site.social.github}
                className="group text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-lg p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View us on GitHub"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.599.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.872.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.815 1.103.815 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-1 border-t border-gray-200/50 pt-8 dark:border-gray-800/50">
          {/* Final CTA */}
          <div className="mt-8 text-center">
            <div className="relative rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-md border border-blue-200/50 p-6 dark:border-blue-800/50">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Do you have an open position?
              </p>
              <Link
                href="/lead-capture"
                className="inline-flex items-center bg-gradient-to-r from-purple-700 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Hire Me!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
