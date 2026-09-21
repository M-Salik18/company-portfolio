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
        <main className="min-h-screen bg-[#101114] text-white pt-20">
            {/* NAVIGATION */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#101114]/90 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/Images/logo.jpeg"
                            alt="XYRON Logo"
                            className="h-10 w-10 rounded-xl object-contain"
                        />

                        <span className="text-lg font-bold tracking-[0.15em]">
                            XYRON
                        </span>
                    </a>

                    <a
                        href="/#products"
                        className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-amber-300 hover:text-amber-300"
                    >
                        ← All products
                    </a>
                </nav>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                        <span className="h-px w-8 bg-amber-300" />
                        Project case study
                    </div>

                    <div className="mt-8 grid items-end gap-10 md:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                                DineFlow
                                <span className="text-amber-300">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
                                An all-in-one restaurant management platform connecting online
                                menu ordering, table reservations, live kitchen workflows, and analytics.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-xs uppercase tracking-widest text-zinc-500">
                                Project type
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                                Restaurant Management & Ordering System
                            </p>

                            <div className="my-5 border-t border-white/10" />

                            <p className="text-xs uppercase tracking-widest text-zinc-500">
                                Project focus
                            </p>

                            <p className="mt-2 leading-7 text-zinc-300">
                                Digital Menus · Table Bookings · Kitchen Display
                            </p>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#1a1c22] p-2 shadow-2xl sm:p-4">
                        <img
                            src="/Images/Restuarant/restuarant.png"
                            alt="DineFlow Restaurant platform interface"
                            className="h-auto w-full rounded-2xl"
                            fetchPriority="high"
                        />
                    </div>

                    <p className="mt-4 text-sm text-zinc-500">
                        DineFlow restaurant management — customer ordering & table reservation portal
                    </p>
                </div>
            </section>

            {/* PROJECT OVERVIEW */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                            01 / Overview
                        </p>

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
            </section>

            {/* FEATURES */}
            <section className="border-y border-white/10 bg-[#17181d]">
                <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                        02 / Core capabilities
                    </p>

                    <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        Built for fast-paced culinary workflows.
                    </h2>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        {features.map((feature) => (
                            <article
                                key={feature.number}
                                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-amber-300/40 sm:p-9"
                            >
                                <span className="text-sm text-amber-300">
                                    {feature.number}
                                </span>

                                <h3 className="mt-6 text-2xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY */}
            <section className="border-b border-white/10 bg-[#17181d]">
                <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                                03 / Technology
                            </p>

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
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300"
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
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                            04 / Project summary
                        </p>

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
                                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
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
                <div className="relative overflow-hidden rounded-[2rem] bg-amber-300 p-8 text-[#171717] sm:p-14 md:p-16">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-black/5" />

                    <p className="text-sm font-bold uppercase tracking-[0.2em]">
                        XYRON / Selected work
                    </p>

                    <h2 className="relative mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Need custom software for your business?
                    </h2>

                    <p className="relative mt-5 max-w-xl leading-7 text-black/70">
                        Let&apos;s build an efficient, intuitive software system tailored to your unique workflows.
                    </p>

                    <div className="relative mt-8 flex flex-wrap gap-4">
                        <a
                            href="/#contact"
                            className="rounded-full bg-[#171717] px-7 py-4 font-semibold text-white transition hover:bg-black/80"
                        >
                            Start a project ↗
                        </a>

                        <a
                            href="/#products"
                            className="rounded-full border border-black/25 px-7 py-4 font-semibold transition hover:bg-black/5"
                        >
                            Back to all products
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between md:px-10">
                    <a
                        href="/"
                        className="font-bold tracking-widest text-white"
                    >
                        XYRON
                    </a>

                    <p>
                        © {new Date().getFullYear()} XYRON. Built with care.
                    </p>

                    <a
                        href="/#home"
                        className="transition hover:text-amber-300"
                    >
                        Back to top ↑
                    </a>
                </div>
            </footer>
        </main>
    );
}
