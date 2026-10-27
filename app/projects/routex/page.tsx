const technologies = [
    "Express.js",
    "Flutter",
    "Python",
    "XGBoost",
    "Cloudflare",
    "D1",
];

const features = [
    {
        number: "01",
        title: "Route Optimization",
        description:
            "Plan delivery routes with an optimization service built to support logistics operations.",
    },
    {
        number: "02",
        title: "Vehicle Tracking",
        description:
            "Monitor vehicle locations and delivery progress through the tracking system.",
    },
    {
        number: "03",
        title: "Inventory & Orders",
        description:
            "Manage orders and inventory information in one connected platform.",
    },
    {
        number: "04",
        title: "AI Forecasting",
        description:
            "Use forecasting capabilities to support stock planning and operational decisions.",
    },
];

export default function RouteXPage() {
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
                <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-amber-400/20 via-sky-500/10 to-transparent blur-[140px] animate-pulse-glow" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                    <div className="inline-flex items-center gap-2 glass-pill-amber rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-ping" />
                        Project case study
                    </div>

                    <div className="mt-8 grid items-end gap-10 md:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
                                RouteX
                                <span className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
                                A logistics management platform connecting delivery
                                operations, route optimization, tracking, inventory, and
                                AI-powered forecasting.
                            </p>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl shadow-xl">
                            <p className="text-xs uppercase tracking-widest text-amber-300/70">
                                Project type
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                                Logistics Management System
                            </p>

                            <div className="my-5 border-t border-white/10" />

                            <p className="text-xs uppercase tracking-widest text-amber-300/70">
                                Project focus
                            </p>

                            <p className="mt-2 leading-7 text-zinc-300">
                                Web dashboard · Route optimization · AI
                            </p>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="mt-14 overflow-hidden rounded-3xl glass-card sheen-overlay p-3 sm:p-5 shadow-2xl">
                        <img
                            src="/Images/RouteX/login.png"
                            alt="RouteX Login Portal"
                            className="h-auto w-full rounded-2xl object-cover"
                            fetchPriority="high"
                        />
                    </div>

                    <p className="mt-4 text-sm text-zinc-400">
                        RouteX login portal — secure logistics management gateway
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
                                Bringing logistics operations together.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-zinc-300">
                                RouteX is a logistics platform designed to bring important
                                delivery and business operations into a connected system. It
                                combines desktop management, vehicle routing, and
                                intelligent features to support logistics workflows.
                            </p>

                            <p className="mt-5 leading-7 text-zinc-400">
                                The platform includes tools for managing orders, planning
                                routes, monitoring vehicles, handling inventory, and reviewing
                                forecasts.
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
                        Designed around real workflows.
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
                                Built with modern tools.
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-400">
                                Technologies used across the platform&apos;s web,
                                backend, and machine-learning components.
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
                            One connected logistics experience.
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-zinc-300">
                            RouteX brings together key elements of enterprise delivery
                            operations into an intuitive, secure interface.
                        </p>

                        <p className="mt-5 leading-7 text-zinc-400">
                            Route optimization, live tracking, inventory coordination,
                            and AI-driven forecasting empower operations teams to deliver
                            faster with higher efficiency and accuracy.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Web Dashboard",
                                "Route Optimization",
                                "Live Tracking",
                                "AI Forecasting",
                                "Inventory Management",
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
                            Have a project in mind?
                        </h2>

                        <p className="relative mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                            Let&apos;s discuss how we can help bring your next digital
                            project to life.
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
