import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const projects = [
  {
    title: "Paystack Checkout Automation",
    slug: "paystack-checkout-automation",
    image: "/placeholder.svg?height=380&width=720",
    summary:
      "Custom payment flow with webhooks, retries, and receipts for a smooth checkout experience.",
    role: "Full-stack Development",
    stack: ["Next.js", "Node.js", "Paystack", "PostgreSQL"],
    overview:
      "Built a resilient checkout flow that supports asynchronous payment verification and clear customer feedback.",
    highlights: [
      "Webhook verification and event logging",
      "Retry logic for failed or delayed payments",
      "Receipt emails and admin status tracking",
    ],
    deliverables: [
      "Checkout UI and payment state handling",
      "Webhook handler and database schema",
      "Admin view for payment status",
    ],
    outcome:
      "A reliable payment pipeline that improves customer confidence and reduces manual follow-ups.",
  },
  {
    title: "E-commerce Store Rebuild",
    slug: "ecommerce-store-rebuild",
    image: "/placeholder.svg?height=380&width=720",
    summary:
      "Modern storefront with improved performance, cleaner UI, and a streamlined cart.",
    role: "Front-end Lead",
    stack: ["Next.js", "Tailwind", "Stripe", "Contentful"],
    overview:
      "Rebuilt the storefront to prioritize product discovery, speed, and a simplified checkout path.",
    highlights: [
      "Reusable design system for product cards",
      "Optimized images and lazy loading",
      "Simplified cart and checkout flow",
    ],
    deliverables: [
      "New UI components and layout",
      "Performance and lighthouse improvements",
      "Content model updates for merchandising",
    ],
    outcome:
      "A cleaner shopping experience that loads faster and supports merchandising updates.",
  },
  {
    title: "SaaS Analytics Dashboard",
    slug: "saas-analytics-dashboard",
    image: "/placeholder.svg?height=380&width=720",
    summary:
      "Interactive dashboards with real-time metrics, filtering, and exportable reports.",
    role: "Product Engineering",
    stack: ["React", "Node.js", "Redis", "PostgreSQL"],
    overview:
      "Delivered a flexible analytics workspace with KPI tiles, charts, and export tools.",
    highlights: [
      "Real-time metrics with cache layer",
      "Advanced filters and saved views",
      "CSV export for stakeholder reporting",
    ],
    deliverables: [
      "Dashboard UI and charting",
      "API endpoints and caching strategy",
      "Export pipeline and audit logging",
    ],
    outcome:
      "A scalable reporting surface that supports daily decision-making.",
  },
  {
    title: "Booking Platform",
    slug: "booking-platform",
    image: "/placeholder.svg?height=380&width=720",
    summary:
      "Scheduling platform with availability rules, notifications, and admin tools.",
    role: "Full-stack Development",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
    overview:
      "Created a booking system that balances flexible scheduling with operational controls.",
    highlights: [
      "Availability rules and blackout dates",
      "SMS confirmations and reminders",
      "Admin tools for rescheduling",
    ],
    deliverables: [
      "Booking flow and confirmation screens",
      "Notification service integration",
      "Admin dashboard for scheduling",
    ],
    outcome:
      "A dependable scheduling workflow that reduces no-shows and support overhead.",
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-blue-500 dark:text-blue-300 mb-3">
            Project Detail
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div className="relative overflow-hidden rounded-3xl border border-blue-200/40 bg-gradient-to-br from-blue-100/40 via-white/30 to-purple-100/40 shadow-xl dark:border-blue-900/40 dark:from-blue-950/40 dark:via-gray-950/40 dark:to-purple-950/40">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-8 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.overview}
                </p>
              </div>

              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-8 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Highlights
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-8 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Deliverables
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-6 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Role
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
              </div>

              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-6 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-blue-200/40 p-6 shadow-xl dark:bg-gray-900/70 dark:border-blue-900/40">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Outcome
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
