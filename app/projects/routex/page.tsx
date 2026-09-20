
const screenshots = [
    {
        title: "Dashboard Login",
        category: "AUTHENTICATION",
        description:
            "A secure login interface for accessing the RouteX logistics management platform.",
        src: "/Images/RouteX/login.png",
    },
    {
        title: "Dashboard",
        category: "OVERVIEW",
        description:
            "A centralized view of logistics operations and key performance indicators.",
        src: "/Images/RouteX/dashboard.png",
    },
    {
        title: "Route Optimization",
        category: "ROUTING",
        description:
            "Route planning designed to help organize deliveries and improve operational efficiency.",
        src: "/Images/RouteX/routing.png",
    },
    {
        title: "Live Tracking",
        category: "TRACKING",
        description:
            "Vehicle tracking features for monitoring delivery progress.",
        src: "/Images/RouteX/tracking.png",
    },
    {
        title: "Order Management",
        category: "ORDERS",
        description:
            "An interface for managing customer orders and delivery information.",
        src: "/Images/RouteX/order.png",
    },
    {
        title: "AI Predictions",
        category: "PREDICTIONS",
        description:
            "Forecasting features that support inventory planning and business decisions.",
        src: "/Images/RouteX/predictions.png",
    },
    {
        title: "Approval Workflows",
        category: "APPROVALS",
        description:
            "A workflow for reviewing and managing operational approvals.",
        src: "/Images/RouteX/approvals.png",
    },
];

const mobileScreenshots = [
    {
        title: "Mobile Login",
        category: "AUTHENTICATION",
        description:
            "A mobile login interface for accessing RouteX customer and driver features.",
        src: "/Images/RouteX/mobile-app/login-app.png",
    },
    {
        title: "Customer Dashboard",
        category: "CUSTOMER",
        description:
            "A customer-focused dashboard for accessing orders and delivery information.",
        src: "/Images/RouteX/mobile-app/app-customer-dashboard.png",
    },
    {
        title: "Create Order",
        category: "CUSTOMER",
        description:
            "Customers can create and submit new delivery orders through the mobile application.",
        src: "/Images/RouteX/mobile-app/customer-createOrder.png",
    },
    {
        title: "Driver Order Acceptance",
        category: "DRIVER",
        description:
            "Drivers can view assigned deliveries and accept their delivery tasks.",
        src: "/Images/RouteX/mobile-app/driverAcceptingOrder.png",
    },
    {
        title: "Driver Map View",
        category: "DRIVER",
        description:
            "A map-based interface helps drivers view delivery locations and navigate their assigned routes.",
        src: "/Images/RouteX/mobile-app/drivers-mapView.png",
    },
];

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
        <main className="min-h-screen bg-[#101114] text-white">
            {/* NAVIGATION */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101114]/90 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
                    <a href="/" className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-xl font-black text-black">
                            B
                        </span>

                        <span className="text-lg font-bold tracking-[0.15em]">
                            BYTECRAFT
                            <span className="ml-2 text-xs font-normal tracking-normal text-zinc-400">
                                Digital Studio
                            </span>
                        </span>
                    </a>

                    <a
                        href="/#work"
                        className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-amber-300 hover:text-amber-300"
                    >
                        ← All projects
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
                                RouteX
                                <span className="text-amber-300">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
                                A logistics management platform connecting delivery
                                operations, route optimization, tracking, inventory, and
                                AI-powered forecasting.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <p className="text-xs uppercase tracking-widest text-zinc-500">
                                Project type
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                                Logistics Management System
                            </p>

                            <div className="my-5 border-t border-white/10" />

                            <p className="text-xs uppercase tracking-widest text-zinc-500">
                                Project focus
                            </p>

                            <p className="mt-2 leading-7 text-zinc-300">
                                Web dashboard · Mobile application · AI
                            </p>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#1a1c22] p-2 shadow-2xl sm:p-4">
                        <img
                            src="/Images/RouteX/dashboard.png"
                            alt="RouteX dashboard"
                            className="h-auto w-full rounded-2xl"
                            fetchPriority="high"
                        />
                    </div>

                    <p className="mt-4 text-sm text-zinc-500">
                        RouteX dashboard — project interface preview
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
                            Bringing logistics operations together.
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-zinc-300">
                            RouteX is a logistics platform designed to bring important
                            delivery and business operations into a connected system. It
                            combines a desktop dashboard, a mobile application, and
                            intelligent features to support logistics workflows.
                        </p>

                        <p className="mt-5 leading-7 text-zinc-400">
                            The platform includes tools for managing orders, planning
                            routes, monitoring vehicles, handling inventory, and reviewing
                            forecasts.
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
                        Designed around real workflows.
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

            {/* DESKTOP / WEB SYSTEM */}
            <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                <div className="mb-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                        03 / Management platform
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Explore the desktop system.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                        A closer look at the RouteX management platform, including
                        authentication, logistics operations, route planning, tracking,
                        order management, forecasting, and approval workflows.
                    </p>
                </div>

                <div className="space-y-12">
                    {screenshots.map((screenshot, index) => (
                        <article
                            key={screenshot.src}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-[#191a1f]"
                        >
                            {/* SCREENSHOT HEADER */}
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-xs font-semibold text-amber-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                                        {screenshot.category}
                                    </span>
                                </div>

                                <span className="text-xs text-zinc-500">
                                    RouteX / {screenshot.title}
                                </span>
                            </div>

                            {/* SCREENSHOT */}
                            <div className="bg-[#111318] p-2 sm:p-5">
                                <img
                                    src={screenshot.src}
                                    alt={`RouteX ${screenshot.title} interface`}
                                    loading="lazy"
                                    className="h-auto w-full rounded-xl"
                                />
                            </div>

                            {/* DESCRIPTION */}
                            <div className="grid gap-3 px-5 py-6 sm:px-7 md:grid-cols-[0.7fr_1.3fr] md:items-center">
                                <h3 className="text-xl font-semibold">
                                    {screenshot.title}
                                </h3>

                                <p className="leading-7 text-zinc-400">
                                    {screenshot.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* MOBILE APPLICATION */}
            <section className="border-y border-white/10 bg-[#17181d]">
                <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
                    <div className="mb-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                            04 / Mobile application
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            RouteX on mobile.
                        </h2>

                        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                            The RouteX mobile application provides dedicated experiences
                            for customers and drivers, supporting order creation, delivery
                            tasks, and map-based vehicle operations.
                        </p>
                    </div>

                    {/* MOBILE SCREENSHOTS */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {mobileScreenshots.map((screenshot, index) => (
                            <article
                                key={screenshot.src}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111216]"
                            >
                                {/* MOBILE IMAGE */}
                                <div className="flex min-h-[500px] items-center justify-center overflow-hidden bg-[#0c0d10] p-5 sm:min-h-[580px]">
                                    <img
                                        src={screenshot.src}
                                        alt={`RouteX ${screenshot.title} mobile interface`}
                                        loading="lazy"
                                        className="h-auto max-h-[600px] w-auto max-w-full rounded-2xl object-contain shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>

                                {/* MOBILE DETAILS */}
                                <div className="border-t border-white/10 p-6">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-xs font-semibold text-amber-300">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                            {screenshot.category}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold">
                                        {screenshot.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-zinc-400">
                                        {screenshot.description}
                                    </p>
                                </div>
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
                                05 / Technology
                            </p>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Built with modern tools.
                            </h2>

                            <p className="mt-5 leading-7 text-zinc-400">
                                Technologies used across the platform&apos;s web, mobile,
                                backend, and machine-learning components.
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
                            06 / Project summary
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            One connected logistics experience.
                        </h2>
                    </div>

                    <div>
                        <p className="text-lg leading-8 text-zinc-300">
                            RouteX brings together the different parts of a delivery
                            operation through a management dashboard and mobile
                            application.
                        </p>

                        <p className="mt-5 leading-7 text-zinc-400">
                            Administrators can manage operations through the dashboard,
                            while customers and drivers interact with the system through
                            the mobile application. Route optimization, live tracking,
                            inventory management, and AI-powered forecasting support the
                            overall workflow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Web Dashboard",
                                "Mobile Application",
                                "Route Optimization",
                                "Live Tracking",
                                "AI Forecasting",
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
                        BYTECRAFT / Selected work
                    </p>

                    <h2 className="relative mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Have a project in mind?
                    </h2>

                    <p className="relative mt-5 max-w-xl leading-7 text-black/70">
                        Let&apos;s discuss how we can help bring your next digital
                        project to life.
                    </p>

                    <div className="relative mt-8 flex flex-wrap gap-4">
                        <a
                            href="/#contact"
                            className="rounded-full bg-[#171717] px-7 py-4 font-semibold text-white transition hover:bg-black/80"
                        >
                            Start a project ↗
                        </a>

                        <a
                            href="/#work"
                            className="rounded-full border border-black/25 px-7 py-4 font-semibold transition hover:bg-black/5"
                        >
                            Back to all projects
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
                        BYTECRAFT

                        <span className="ml-2 font-normal tracking-normal text-zinc-500">
                            / Digital Studio
                        </span>
                    </a>

                    <p>
                        © {new Date().getFullYear()} BYTECRAFT. Built with care.
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
