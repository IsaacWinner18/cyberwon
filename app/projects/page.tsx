import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Paystack Checkout Automation",
      slug: "paystack-checkout-automation",
      image: "/placeholder.svg?height=260&width=460",
      summary:
        "Custom payment flow with webhooks, retries, and receipts for a smooth checkout experience.",
      role: "Full-stack Development",
      stack: ["Next.js", "Node.js", "Paystack", "PostgreSQL"],
    },
    {
      title: "E-commerce Store Rebuild",
      slug: "ecommerce-store-rebuild",
      image: "/placeholder.svg?height=260&width=460",
      summary:
        "Modern storefront with improved performance, cleaner UI, and a streamlined cart.",
      role: "Front-end Lead",
      stack: ["Next.js", "Tailwind", "Stripe", "Contentful"],
    },
    {
      title: "SaaS Analytics Dashboard",
      slug: "saas-analytics-dashboard",
      image: "/placeholder.svg?height=260&width=460",
      summary:
        "Interactive dashboards with real-time metrics, filtering, and exportable reports.",
      role: "Product Engineering",
      stack: ["React", "Node.js", "Redis", "PostgreSQL"],
    },
    {
      title: "Booking Platform",
      slug: "booking-platform",
      image: "/placeholder.svg?height=260&width=460",
      summary:
        "Scheduling platform with availability rules, notifications, and admin tools.",
      role: "Full-stack Development",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-300 mb-3">
              Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A selection of product builds focused on UX clarity, performance,
              and resilient systems.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-900/70 dark:border-blue-900/40"
              >
                <div className="relative overflow-hidden rounded-2xl border border-blue-200/40 bg-gradient-to-br from-blue-100/40 via-white/30 to-purple-100/40 dark:border-blue-900/40 dark:from-blue-950/40 dark:via-gray-950/40 dark:to-purple-950/40 mb-6">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-300 mb-2">
                  {project.role}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200 font-medium"
                >
                  View case details ->
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
