"use client";

import { useState } from "react";

const BRAND = {
  name: "BYTECRAFT",
  tagline: "Digital Studio",
  email: "nexora@gmail.com",
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
  },
  {
    number: "02",
    title: "Brew & Co. — Café",
    category: "Business Website · Concept Project",
    description:
      "A welcoming café website concept featuring a menu, location information, opening hours, and customer inquiries.",
    tags: ["React", "Responsive UI", "Web Design"],
    style: "cafe",
    symbol: "B.",
  },
  {
    number: "03",
    title: "Stockly — Business Dashboard",
    category: "Custom Software · Concept Project",
    description:
      "A sample inventory and sales dashboard designed to help small businesses organize products and monitor operations.",
    tags: ["TypeScript", "Dashboard UI", "Database"],
    style: "dashboard",
    symbol: "S.",
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

function CafePreview() {
  return (
    <div className="bg-[#f3e7d6] p-5 text-[#433024] sm:p-8">
      <div className="flex justify-between text-xs font-bold tracking-widest">
        <span>BREW & CO.</span>
        <span>MENU　VISIT US</span>
      </div>

      <div className="grid grid-cols-2 items-center gap-4 py-8">
        <div>
          <p className="text-xs uppercase tracking-widest">
            Your daily pause
          </p>

          <h3 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Good
            <br />
            coffee.
            <br />
            Good days.
          </h3>

          <p className="mt-4 text-sm">Made with care.</p>
        </div>

        <div className="flex aspect-square items-center justify-center rounded-full bg-gradient-to-br from-[#bd8b5e] to-[#4a2c1c]">
          <span className="text-6xl text-white/80">☕</span>
        </div>
      </div>
    </div>
  );
}

function StocklyPreview() {
  return (
    <div className="bg-[#161922] p-5 text-white sm:p-8">
      <div className="flex justify-between text-xs text-zinc-400">
        <span>STOCKLY / OVERVIEW</span>
        <span>Sample preview</span>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {["Products", "Orders", "Revenue"].map((item, i) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-white/5 p-3"
          >
            <p className="text-[10px] text-zinc-400">{item}</p>

            <p className="mt-2 text-xl font-semibold">
              {["128", "46", "$8.4k"][i]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex h-28 items-end gap-2 rounded-lg bg-white/5 p-4">
        {[35, 65, 45, 85, 55, 95, 70, 100, 60, 80].map(
          (height, i) => (
            <div
              key={i}
              style={{ height: `${height}%` }}
              className="flex-1 rounded-t bg-amber-300/80"
            />
          )
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#101114] text-white">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101114]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-xl font-black text-black">
              B
            </span>

            <span className="text-lg font-bold tracking-[0.15em]">
              {BRAND.name}

              <span className="ml-2 text-xs font-normal tracking-normal text-zinc-400">
                {BRAND.tagline}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a
              className="transition hover:text-amber-300"
              href="#work"
            >
              Work
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
            {["work", "services", "about", "contact"].map((item) => (
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
              href="#work"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-amber-300"
            >
              Explore our work ↓
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-500">
            <span>✳ Thoughtful design</span>
            <span>✳ Practical solutions</span>
            <span>✳ Built for people</span>
          </div>
        </div>

        {/* ABSTRACT PROJECT PREVIEW */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[3rem] bg-amber-300/10 blur-3xl" />

          <div className="relative rotate-1 rounded-3xl border border-white/10 bg-[#1b1c21] p-3 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="ml-4 text-xs text-zinc-500">
                yourbusiness.com
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#e9e2d6] p-6 text-[#28251f] sm:p-9">
              <div className="flex items-center justify-between text-xs font-bold tracking-widest">
                <span>MODA.</span>
                <span>COLLECTION · ABOUT · SHOP</span>
              </div>

              <div className="grid grid-cols-2 items-center gap-4 py-10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em]">
                    The new collection
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold leading-none sm:text-5xl">
                    Wear
                    <br />
                    your
                    <br />
                    story.
                  </h2>

                  <div className="mt-5 inline-block rounded-full bg-[#28251f] px-4 py-2 text-xs text-white">
                    Explore collection ↗
                  </div>
                </div>

                <div className="flex aspect-[3/4] items-center justify-center rounded-t-full bg-gradient-to-br from-[#c9ad91] via-[#aa8063] to-[#6e5144]">
                  <span className="text-7xl font-light text-white/80">
                    M.
                  </span>
                </div>
              </div>

              <div className="flex justify-between border-t border-black/15 pt-4 text-[10px] uppercase tracking-widest">
                <span>Designed for everyday</span>
                <span>01 / 03</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-3 rounded-2xl border border-white/10 bg-[#222329] p-4 shadow-xl sm:-left-10">
            <p className="text-xs text-zinc-400">Our focus</p>

            <p className="mt-1 font-semibold">
              Design meets technology ✳
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

      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Selected work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas into experiences.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-zinc-400">
            A collection of concepts and projects that demonstrate how we
            approach design, development, and business challenges.
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
                    ? "bg-[#202630]"
                    : project.style === "cafe"
                      ? "bg-[#d5b99c]"
                      : "bg-[#222630]"
                  }`}
              >
                <div
                  className={`w-full overflow-hidden rounded-xl shadow-2xl transition duration-500 group-hover:-translate-y-1 ${index === 0 ? "max-w-5xl" : "max-w-xl"
                    }`}
                >
                  {/* ROUTEX PREVIEW */}
                  {project.style === "routex" && (
                    <img
                      src="/Images/RouteX/dashboard.png"
                      alt="RouteX dashboard screenshot"
                      className="h-auto w-full object-cover"
                    />
                  )}

                  {/* CAFE PREVIEW */}
                  {project.style === "cafe" && <CafePreview />}

                  {/* STOCKLY PREVIEW */}
                  {project.style === "dashboard" && (
                    <StocklyPreview />
                  )}
                </div>

                <span className="absolute right-7 top-7 rounded-full bg-black/70 px-4 py-2 text-xs text-white">
                  {project.style === "routex"
                    ? "Project showcase ↗"
                    : "Concept preview"}
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

                {/* ROUTEX PAGE LINK */}
                {project.style === "routex" && (
                  <a
                    href="/projects/routex"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Explore RouteX
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-zinc-500">
          Brew & Co. and Stockly are concept projects created to demonstrate
          our design and development approach. RouteX is a software project
          developed as part of our project work.
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
              Two developers.
              <br />
              One shared vision.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-300">
              We are a small development team passionate about creating
              useful, accessible, and thoughtfully designed digital
              experiences.
            </p>

            <p className="mt-5 leading-7 text-zinc-400">
              We combine software development skills with a practical
              understanding of business needs. Our goal is to help businesses
              establish their online presence and simplify everyday work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Development",
                "Software Engineering",
                "Problem Solving",
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

            <span className="ml-2 font-normal tracking-normal text-zinc-500">
              / Digital Studio
            </span>
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