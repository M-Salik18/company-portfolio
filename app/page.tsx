"use client";

import { useState } from "react";

const BRAND = {
  name: "XYRON",
  email: "xyron.comp@gmail.com",
  whatsapp: "94781942757", // Replace with your WhatsApp number in international format
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
    glowColor: "from-amber-400/20 via-sky-500/10 to-transparent",
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
    glowColor: "from-amber-400/20 via-orange-500/10 to-transparent",
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
    glowColor: "from-amber-400/20 via-emerald-500/10 to-transparent",
  },
];

const services = [
  {
    number: "01",
    title: "Web design & development",
    description:
      "Business sites, e-commerce, portals and multilingual builds.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Software & apps",
    description:
      "Custom business software, SaaS, mobile apps and PWAs.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "AI & automation",
    description:
      "Chatbots, document search, lead capture and workflow automation.",
    icon: "⌥",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Vulnerability assessments, hardening and SIEM deployment, within written scope.",
    icon: "⌁",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "VPS, CI/CD, Docker, backups, uptime monitoring and deployment.",
    icon: "◇",
  },
  {
    number: "06",
    title: "IT support",
    description:
      "Remote support, Microsoft 365, Google Workspace and small-office networks.",
    icon: "◎",
  },
  {
    number: "07",
    title: "UI/UX & branding",
    description:
      "Brand identity, wireframes, prototypes and design systems.",
    icon: "✦",
  },
  {
    number: "08",
    title: "Data, IoT & Integrations",
    description:
      "Dashboards, APIs, sensors, Raspberry Pi and system integrations.",
    icon: "◬",
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
    <main className="min-h-screen text-white pt-24">
      {/* NAVIGATION - Translucent Glassmorphism Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full glass-nav">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 p-1 backdrop-blur-md transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_-3px_rgba(251,191,36,0.3)]">
              <img
                src="/Images/logo.jpeg"
                alt={`${BRAND.name} Logo`}
                className="h-8 w-8 rounded-lg object-contain"
              />
            </div>

            <span className="text-lg font-bold tracking-[0.18em] text-white transition group-hover:text-amber-300">
              {BRAND.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a
              className="transition duration-200 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              href="#products"
            >
              Products
            </a>

            <a
              className="transition duration-200 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              href="#services"
            >
              Services
            </a>

            <a
              className="transition duration-200 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              href="#about"
            >
              About
            </a>

            <a
              className="sheen-overlay relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 font-semibold text-black shadow-[0_0_25px_-5px_rgba(245,158,11,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_0px_rgba(245,158,11,0.7)]"
              href="#contact"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            className="glass-pill rounded-lg px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-300/40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass-panel mx-4 mb-4 flex flex-col gap-4 rounded-2xl p-6 md:hidden">
            {["products", "services", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize text-zinc-300 transition hover:text-amber-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36 overflow-hidden"
      >
        {/* Local 3D Light Glow Accent */}
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/25 to-transparent blur-[120px]" />
        <div className="pointer-events-none absolute right-10 top-40 h-72 w-72 rounded-full bg-amber-500/15 blur-[130px]" />

        <div className="relative z-10 max-w-4xl">
          {/* Glass Pill Badge */}
          <div className="mb-8 inline-flex items-center gap-3 glass-pill-amber rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-ping" />
            <span>Web · Software · Digital</span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            We build digital experiences that{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]">
              move businesses forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            From beautiful websites to custom software, we help businesses
            turn ideas into practical, high-performance digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="sheen-overlay relative overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_0px_rgba(245,158,11,0.8)]"
            >
              Start a project
            </a>

            <a
              href="#products"
              className="glass-card sheen-overlay rounded-full px-8 py-4 font-semibold text-white border border-white/15 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:text-amber-300"
            >
              Explore our products
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 text-xs text-zinc-400">
            <span className="glass-pill rounded-full px-4 py-2">
              ✦ Thoughtful design
            </span>
            <span className="glass-pill rounded-full px-4 py-2">
              ✦ Practical solutions
            </span>
            <span className="glass-pill rounded-full px-4 py-2">
              ✦ Built for scale
            </span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP - Translucent Glass Floating Capsule */}
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="glass-panel sheen-overlay rounded-2xl py-6 px-6 sm:px-10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex flex-wrap items-center justify-around gap-6 text-center text-xs font-semibold tracking-[0.2em] text-zinc-300">
            <span className="transition hover:text-amber-300">WEBSITE DEVELOPMENT</span>
            <span className="hidden sm:inline text-white/20">◆</span>
            <span className="transition hover:text-amber-300">BUSINESS SOFTWARE</span>
            <span className="hidden sm:inline text-white/20">◆</span>
            <span className="transition hover:text-amber-300">DIGITAL EXPERIENCES</span>
            <span className="hidden sm:inline text-white/20">◆</span>
            <span className="transition hover:text-amber-300">CREATIVE TECHNOLOGY</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Selected products
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas into experiences.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-300">
            A collection of projects and solutions demonstrating our expertise in
            web platforms, tailored e-commerce, and custom business software.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`glass-card sheen-overlay rounded-3xl p-2 transition duration-500 hover:-translate-y-1.5 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* PROJECT PREVIEW */}
              <div
                className={`relative flex items-center justify-center overflow-hidden rounded-[1.3rem] p-6 sm:p-10 ${
                  project.style === "routex"
                    ? "bg-gradient-to-br from-[#181d26]/90 to-[#10131a]/95"
                    : project.style === "clothing"
                    ? "bg-gradient-to-br from-[#252321]/90 to-[#171615]/95"
                    : "bg-gradient-to-br from-[#1f232b]/90 to-[#14171d]/95"
                }`}
              >
                {/* 3D Ambient Light Reflection inside Preview */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.glowColor} opacity-70 blur-2xl`}
                />

                <div
                  className={`relative z-10 w-full overflow-hidden rounded-xl border border-white/15 shadow-2xl transition duration-500 group-hover:scale-[1.01] ${
                    index === 0 ? "max-w-5xl" : "max-w-xl"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <span className="glass-pill absolute right-7 top-7 rounded-full px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-xl">
                  Project showcase
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="glass-pill-amber rounded-full px-3 py-1 text-xs uppercase tracking-widest text-amber-300">
                    {project.number} / {project.category}
                  </span>

                  <span className="text-2xl font-bold text-amber-300/40">
                    {project.symbol}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-pill rounded-full px-3.5 py-1.5 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PROJECT EXPLORE LINK */}
                <div className="mt-7">
                  <a
                    href={project.href}
                    className="sheen-overlay inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_0px_rgba(245,158,11,0.7)]"
                  >
                    <span>{project.exploreText}</span>
                    <span className="text-base font-bold">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-zinc-400">
          RouteX, Moda, and DineFlow showcase our capabilities across custom web platforms,
          e-commerce, and enterprise software solutions.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            What we do
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            What we build and run.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-300">
            We work with businesses to understand their goals and create
            practical, well-designed digital solutions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="glass-card sheen-overlay flex flex-col justify-between rounded-2xl p-7 transition duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-amber-300/60">
                    {service.number}
                  </span>

                  <div className="glass-pill-amber flex h-10 w-10 items-center justify-center rounded-xl text-lg text-amber-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              How we work
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear process.
              <br />
              <span className="text-amber-300">Thoughtful results.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-zinc-300">
              We keep the process collaborative and transparent, from the
              first conversation to deployment and beyond.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map(([number, title, description]) => (
              <div
                key={number}
                className="glass-panel sheen-overlay flex items-start gap-5 rounded-2xl p-6 transition duration-300 hover:border-amber-300/40"
              >
                <div className="glass-pill-amber flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold text-amber-300">
                  {number}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16">
          {/* Subtle Ambient 3D Glow behind About */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-[130px]" />

          <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                A little about us
              </div>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Engineering excellence.
                <br />
                <span className="text-amber-300">Driven by purpose.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-200">
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
                    className="glass-pill rounded-full px-4 py-2 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT - Translucent Glassmorphism Golden Amber CTA */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="glass-card-amber relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          {/* 3D Radiant Light Flares inside CTA */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-amber-400/25 blur-[100px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -left-20 -bottom-24 h-80 w-80 rounded-full bg-amber-500/15 blur-[110px]" />
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-white/[0.05] blur-[80px]" />

          {/* Decorative Translucent Rings */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[35px] border-amber-300/10" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md">
              Have a project in mind?
            </div>

            <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl text-white">
              Let&apos;s build something{" "}
              <span className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                meaningful together.
              </span>
            </h2>

            <p className="relative mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Tell us about your business, your idea, or the problem you want
              to solve. We&apos;d love to hear from you.
            </p>

            <div className="relative mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
                  "Hi! I would like to discuss a project."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="sheen-overlay relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 font-semibold text-black shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[0_0_40px_0px_rgba(245,158,11,0.8)]"
              >
                Chat on WhatsApp
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="glass-card sheen-overlay rounded-full px-8 py-4 font-semibold text-white border border-white/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300"
              >
                Send us an email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Translucent Glass Footer */}
      <footer className="glass-panel mx-auto max-w-7xl mb-8 rounded-2xl border border-white/10 px-6 py-8">
        <div className="flex flex-col gap-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between md:px-4">
          <a
            href="#home"
            className="font-bold tracking-[0.2em] text-white transition hover:text-amber-300"
          >
            {BRAND.name}
          </a>

          <p>© {new Date().getFullYear()} {BRAND.name}. Built with care.</p>

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