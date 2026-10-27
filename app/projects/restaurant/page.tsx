const technologies = [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "WebSocket",
    "Tailwind CSS",
    "Redis",
];

const features = [
    {
        number: "01",
        title: "Interactive Digital Menu",
        description:
            "Rich visual dish catalogs featuring dietary filters, customization add-ons, pricing options, and chef specials.",
    },
    {
        number: "02",
        title: "Table Reservation Engine",
        description:
            "Seamless online table booking with floorplan mapping, automated confirmations, and party capacity management.",
    },
    {
        number: "03",
        title: "Live Kitchen Display (KDS)",
        description:
            "Real-time WebSocket ticket routing directly to kitchen prep stations with color-coded preparation timers.",
    },
    {
        number: "04",
        title: "Sales & Dining Analytics",
        description:
            "Operational insights tracking peak dining hours, customer retention, top-performing menu items, and revenue trends.",
    },
];

export default function RestaurantProjectPage() {
    return (
        <main className="min-h-screen text-white pt-24">
            {/* NAVIGATION */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full glass-nav">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 p-1 backdrop-blur-md transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_-3px_rgba(251,191,36,0.3)]">
                            <img
                                src="/Images/logo.jpeg"
                                alt="XYRON Logo"
                                className="h-8 w-8 rounded-lg object-contain"
                            />
                        </div>

                        <span className="text-lg font-bold tracking-[0.18em] text-white transition group-hover:text-amber-300">
                            XYRON
                        </span>
                    </a>

                    <a
                        href="/#products"
                        className="glass-pill sheen-overlay rounded-full px-5 py-2.5 text-sm font-medium transition hover:border-amber-300/40 hover:text-amber-300"
                    >
                        ← All products
                    </a>
                </nav>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-amber-400/20 via-emerald-500/10 to-transparent blur-[140px] animate-pulse-glow" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                    <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-ping" />
                        Project case study
                    </div>

                    <div className="mt-8 grid items-end gap-10 md:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                                DineFlow
                                <span className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
                                An all-in-one restaurant management platform connecting online
                                menu ordering, table reservations, live kitchen workflows, and analytics.
                            </p>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl shadow-xl">
                            <p className="text-xs uppercase tracking-widest text-amber-300/70">
                                Project type
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                Restaurant Management & Ordering System
                            </p>

                            <div className="my-5 border-t border-white/10" />

                            <p className="text-xs uppercase tracking-widest text-amber-300/70">
                                Project focus
                            </p>

                            <p className="mt-2 leading-7 text-zinc-300">
                                Digital Menus · Table Bookings · Kitchen Display
                            </p>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="mt-14 overflow-hidden rounded-3xl glass-card sheen-overlay p-3 sm:p-5 shadow-2xl">
                        <img
                            src="/Images/Restuarant/restuarant.png"
                            alt="DineFlow Restaurant platform interface"
                            className="h-auto w-full rounded-2xl object-cover"
                            fetchPriority="high"
                        />
                    </div>

                    <p className="mt-4 text-sm text-zinc-400">
                        DineFlow restaurant management — customer ordering & table reservation portal
                    </p>
                </div>
            </section>

            {/* PROJECT OVERVIEW */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                                01 / Overview
                            </div>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Modernizing hospitality operations.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-zinc-300">
                                DineFlow provides hospitality businesses with a complete digital ecosystem.
                                From contactless mobile menu ordering to intelligent table seating and
                                kitchen communication, it simplifies hospitality workflows.
                            </p>

                            <p className="mt-5 leading-7 text-zinc-400">
                                Whether managing dine-in guests or online takeaway requests, DineFlow ensures
                                synchronization between front-of-house staff, kitchen teams, and diners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                        02 / Core capabilities
                    </div>

                    <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        Built for fast-paced culinary workflows.
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {features.map((feature) => (
                        <article
                            key={feature.number}
                            className="glass-card sheen-overlay rounded-2xl p-7 transition hover:-translate-y-1 sm:p-9"
                        >
                            <span className="glass-pill-amber inline-block rounded-lg px-3 py-1 font-mono text-xs font-bold text-amber-300">
                                {feature.number}
                            </span>

                            <h3 className="mt-6 text-2xl font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* TECHNOLOGY */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16">
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                                03 / Technology
                            </div>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Robust real-time architecture.
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-400">
                                Built with low-latency WebSocket communication, robust databases,
                                and reliable state management to keep dining tickets perfectly synced.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="glass-pill rounded-full px-5 py-3 text-sm text-zinc-200"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT SUMMARY */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                            04 / Project summary
                        </div>

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            A complete restaurant management solution.
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-zinc-300">
                            DineFlow equips restaurants with an intuitive system that reduces wait times,
                            prevents order errors, and gives management actionable revenue insights.
                        </p>

                        <p className="mt-5 leading-7 text-zinc-400">
                            From local bistros to multi-chain dining establishments, DineFlow provides
                            the scale and reliability hospitality teams need every day.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Digital Menu Ordering",
                                "Table Booking",
                                "Kitchen Display System",
                                "Real-Time WebSocket Sync",
                                "Revenue Analytics",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="glass-pill rounded-full px-4 py-2 text-sm text-zinc-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BACK TO PROJECTS / CTA */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="glass-card-amber relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 md:p-16 text-white shadow-2xl">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-amber-400/25 blur-[100px] animate-pulse-glow" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md">
                            XYRON / Selected work
                        </div>

                        <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            Need custom software for your business?
                        </h2>

                        <p className="relative mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                            Let&apos;s build an efficient, intuitive software system tailored to your unique workflows.
                        </p>

                        <div className="relative mt-8 flex flex-wrap gap-4">
                            <a
                                href="/#contact"
                                className="sheen-overlay relative overflow-hidden rounded-full bg-amber-400 px-8 py-4 font-semibold text-black shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                            >
                                Start a project
                            </a>

                            <a
                                href="/#products"
                                className="glass-card sheen-overlay rounded-full px-8 py-4 font-semibold text-white border border-white/20 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300"
                            >
                                Back to all products
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="glass-panel mx-auto max-w-7xl mb-8 rounded-2xl border border-white/10 px-6 py-8">
                <div className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between md:px-4">
                    <a
                        href="/"
                        className="font-bold tracking-[0.2em] text-white transition hover:text-amber-300"
                    >
                        XYRON
                    </a>

                    <p>
                        © {new Date().getFullYear()} XYRON. Built with care.
                    </p>

                    <a
                        href="#"
                        className="transition hover:text-amber-300"
                    >
                        Back to top ↑
                    </a>
                </div>
            </footer>
        </main>
    );
}
