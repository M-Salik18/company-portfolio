"use client";

import { useState } from "react";

const BRAND = {
  name: "XYRON",
  email: "xyron@gmail.com",
  whatsapp: "94763896746", // Replace with your WhatsApp number in international format
};

const projects = [
  {
    number: "01",
    title: "RouteX",
    category: "Logistics Management System",
    description:
      "A logistics management platform featuring route optimization, delivery tracking, inventory management, and AI-powered forecasting.",
    tags: [
      "Express.js",
      "Flutter",
      "Python",
      "XGBoost",
      "Cloudflare",
    ],
    style: "routex",
    symbol: "R.",
    image: "/Images/RouteX/login.png",
    href: "/projects/routex",
    exploreText: "Explore RouteX",
  },
  {
    number: "02",
    title: "Moda — Clothing Brand",
    category: "E-Commerce · Fashion Brand Website",
    description:
      "A modern fashion and e-commerce web platform featuring curated seasonal collections, seamless cart experience, and brand storytelling.",
    tags: ["Next.js", "E-Commerce", "UI/UX Design", "Tailwind CSS"],
    style: "clothing",
    symbol: "M.",
    image: "/Images/Clothing/clothing.png",
    href: "/projects/clothing",
    exploreText: "Explore Clothing Software",
  },
  {
    number: "03",
    title: "DineFlow — Restaurant System",
    category: "Custom Software · Restaurant Platform",
    description:
      "An intuitive restaurant management platform featuring digital menu ordering, table reservations, live kitchen workflows, and analytics.",
    tags: ["React", "Custom Software", "Table Booking", "POS & Ordering"],
    style: "restaurant",
    symbol: "D.",
    image: "/Images/Restuarant/restuarant.png",
    href: "/projects/restaurant",
    exploreText: "Explore Restaurant Software",
  },
];

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites that introduce your business and help customers find you online.",
    icon: "↗",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Online stores with product catalogs, shopping experiences, and convenient customer ordering.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Business dashboards, management systems, and tools built around your workflow.",
    icon: "⌘",
  },
  {
    number: "04",
    title: "Mobile & AI Solutions",
    description:
      "Mobile applications and intelligent features for practical business needs.",
    icon: "✳",
  },
];

const processSteps = [
  ["01", "Discover", "Understand your business and goals."],
  ["02", "Plan & design", "Shape the experience and features."],
  ["03", "Develop", "Build, test, and refine the solution."],
  ["04", "Launch & support", "Go live and discuss ongoing needs."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#101114] text-white pt-20">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#101114]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/Images/logo.jpeg"
              alt={`${BRAND.name} Logo`}
              className="h-10 w-10 rounded-xl object-contain"
            />

            <span className="text-lg font-bold tracking-[0.15em]">
              {BRAND.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a
              className="transition hover:text-amber-300"
              href="#products"
            >
              Products
            </a>

            <a
              className="transition hover:text-amber-300"
              href="#services"
            >
              Services
            </a>

            <a
              className="transition hover:text-amber-300"
              href="#about"
            >
              About
            </a>

            <a
              className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-300"
              href="#contact"
            >
              Let&apos;s talk ↗
            </a>
          </div>

          <button
            className="rounded-lg border border-white/15 px-4 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
            {["products", "services", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36"
      >
        <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            <span className="h-px w-8 bg-amber-300" />
            Web · Software · Digital
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            We build digital experiences that{" "}
            <span className="text-amber-300">
              move businesses forward.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            From beautiful websites to custom software, we help businesses
            turn ideas into practical digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-amber-400 px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-amber-300"
            >
              Start a project ↗
            </a>

            <a
              href="#products"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-amber-300"
            >
              Explore our products ↓
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-500">
            <span>✳ Thoughtful design</span>
            <span>✳ Practical solutions</span>
            <span>✳ Built for people</span>
          </div>
        </div>

        {/* ABSTRACT PROJECT PREVIEW - THEME MATCHED */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[3rem] bg-amber-400/15 blur-3xl" />

          <div className="relative rotate-1 rounded-3xl border border-amber-400/20 bg-[#15161c] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {/* Browser top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>xyron.dev/platform</span>
              </div>

              <span className="text-xs text-zinc-600">⌘K</span>
            </div>

            {/* Inner Dashboard / Showcase */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c1e26] via-[#14151b] to-[#0f1015] p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-zinc-400">
                <span className="flex items-center gap-2 font-extrabold tracking-wider text-white">
                  <img
                    src="/Images/logo.jpeg"
                    alt="XYRON"
                    className="h-5 w-5 rounded-md object-contain"
                  />
                  XYRON CORE
                </span>
                <span className="flex items-center gap-1.5 text-[10px] uppercase text-amber-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                  Systems Live
                </span>
              </div>

              <div className="grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Next-Gen Suite
                  </div>

                  <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                    Built for
                    <br />
                    <span className="text-amber-300">impact & scale.</span>
                  </h2>

                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                    Custom web software, rapid workflows, and intelligent business tools.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-300">
                    Explore Platform ↗
                  </div>
                </div>

                {/* Visual Telemetry Widget */}
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-lg">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium text-zinc-400">Performance Score</span>
                    <span className="font-bold text-amber-300">99.8%</span>
                  </div>

                  {/* Sparkline / Bar visualization */}
                  <div className="flex h-20 items-end gap-1.5 rounded-lg bg-black/40 p-2.5">
                    {[40, 65, 45, 80, 55, 95, 75, 100, 68, 88].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-amber-500/40 via-amber-400 to-amber-300 transition duration-300 hover:brightness-125"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-zinc-400">
                    <span>Active Modules</span>
                    <span className="font-semibold text-white">12 Connected</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-widest text-zinc-500">
                <span>Enterprise Architecture</span>
                <span className="text-amber-300/80">01 / 03</span>
              </div>
            </div>
          </div>

          {/* REDESIGNED THEME-MATCHED FLOATING BADGE */}
          <div className="absolute -bottom-8 -left-3 rounded-2xl border border-amber-400/30 bg-[#14151b]/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(245,158,11,0.15)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 sm:-left-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
                Our focus
              </span>
            </div>

            <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold tracking-tight text-white sm:text-base">
              Design meets technology <span className="text-amber-400">✦</span>
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-7 text-center text-sm text-zinc-400 md:px-10">
          <span>WEBSITE DEVELOPMENT</span>
          <span className="text-amber-300">✳</span>

          <span>BUSINESS SOFTWARE</span>
          <span className="text-amber-300">✳</span>

          <span>DIGITAL EXPERIENCES</span>
          <span className="text-amber-300">✳</span>

          <span>CREATIVE TECHNOLOGY</span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Selected products
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas into experiences.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-400">
            A collection of projects and solutions demonstrating our expertise in
            web platforms, tailored e-commerce, and custom business software.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#191a1f] ${index === 0 ? "md:col-span-2" : ""
                }`}
            >
              {/* PROJECT PREVIEW */}
              <div
                className={`relative flex items-center justify-center overflow-hidden p-5 sm:p-8 ${project.style === "routex"
                  ? "bg-[#181d26]"
                  : project.style === "clothing"
                    ? "bg-[#252321]"
                    : "bg-[#1f232b]"
                  }`}
              >
                <div
                  className={`w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl transition duration-500 group-hover:-translate-y-1 ${index === 0 ? "max-w-5xl" : "max-w-xl"
                    }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <span className="absolute right-7 top-7 rounded-full bg-black/75 px-4 py-2 text-xs text-white backdrop-blur-md border border-white/10">
                  Project showcase ↗
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-widest text-amber-300">
                    {project.number} / {project.category}
                  </p>

                  <span className="text-2xl text-zinc-500">
                    {project.symbol}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PROJECT EXPLORE LINK */}
                <div className="mt-6">
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    {project.exploreText}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-zinc-500">
          RouteX, Moda, and DineFlow showcase our capabilities across custom web platforms,
          e-commerce, and enterprise software solutions.
        </p>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-white/10 bg-[#17181d]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            What we do
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Digital tools for real business needs.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            We work with businesses to understand their goals and create
            practical, well-designed digital solutions.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-amber-300/40 hover:bg-white/[0.04] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500">
                    {service.number}
                  </span>

                  <span className="text-3xl text-amber-300">
                    {service.icon}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              How we work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear process.
              <br />
              Thoughtful results.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-zinc-400">
              We keep the process collaborative and transparent, from the
              first conversation to launch.
            </p>
          </div>

          <div className="space-y-0">
            {processSteps.map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 border-b border-white/10 py-6"
              >
                <span className="pt-1 text-sm text-amber-300">
                  {number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 leading-6 text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-white/10 bg-[#17181d]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-32">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              A little about us
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Engineering excellence.
              <br />
              Driven by purpose.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-300">
              We are a dedicated team of software engineers, designers, and digital architects
              passionate about creating high-performance, accessible, and thoughtfully designed
              solutions.
            </p>

            <p className="mt-5 leading-7 text-zinc-400">
              We combine deep technical expertise with a practical understanding of business goals.
              Our mission is to help companies scale their digital infrastructure, modernize workflows,
              and delight customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Platforms",
                "Custom Software",
                "Cloud Solutions",
                "UI/UX Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-amber-300 p-8 text-[#171717] sm:p-14 md:p-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-black/5" />

          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Have a project in mind?
          </p>

          <h2 className="relative mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Let&apos;s build something meaningful together.
          </h2>

          <p className="relative mt-6 max-w-xl leading-7 text-black/70">
            Tell us about your business, your idea, or the problem you want
            to solve. We&apos;d love to hear from you.
          </p>

          <div className="relative mt-9 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                "Hi! I would like to discuss a project."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#171717] px-7 py-4 font-semibold text-white transition hover:bg-black/80"
            >
              Chat on WhatsApp ↗
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="rounded-full border border-black/25 px-7 py-4 font-semibold transition hover:bg-black/5"
            >
              Send us an email ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <a
            href="#home"
            className="font-bold tracking-widest text-white"
          >
            {BRAND.name}
          </a>

          <p>
            © {new Date().getFullYear()} {BRAND.name}. Built with care.
          </p>

          <a
            href="#home"
            className="transition hover:text-amber-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}