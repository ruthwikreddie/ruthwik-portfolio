"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  RefreshCw,
  Gauge,
  Database,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const heroSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
];

const selectedWork = [
  {
    number: "01",
    title: "Reliable Webhook Processing",
    description:
      "Designed webhook processing around idempotency, retry routing, dead-letter handling, and PostgreSQL transaction safety to handle duplicate deliveries and concurrent updates reliably.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Queues"],
    label: "Reliability",
    icon: RefreshCw,
  },
  {
    number: "02",
    title: "Frontend Architecture & Performance",
    description:
      "Improved React and Next.js rendering boundaries, reduced unnecessary data requests, simplified component dependencies, and controlled frontend bundle growth across customer-facing flows.",
    technologies: ["React", "Next.js", "TypeScript", "Performance"],
    label: "Frontend",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Database Performance",
    description:
      "Used query plans, targeted indexes, and SQL simplification to improve a high-volume reconciliation query from 1.8 seconds to 240 milliseconds in production.",
    technologies: ["PostgreSQL", "SQL", "Azure", "Indexing"],
    label: "Data",
    icon: Database,
  },
];

const amazonHighlights = [
  "Refactored Next.js route boundaries and shared React components across checkout and catalog workflows, improving separation between server and client responsibilities.",

  "Modernized a legacy Node.js service layer into typed TypeScript REST APIs with consistent validation, pagination, and error handling.",

  "Built reliable webhook processing with idempotency, retries, dead-letter handling, and PostgreSQL transaction safety.",

  "Improved production visibility and scalability using CloudWatch, ECS Fargate, Lambda, API Gateway, and AWS WAF.",
];

const fiservHighlights = [
  "Built secure banking workflows using JavaScript, TypeScript, Node.js, and Azure API Management.",

  "Improved customer-facing form reliability by tracing validation gaps, duplicate submissions, and asynchronous state issues.",

  "Managed PostgreSQL and Azure SQL schema changes using transactional migrations, constraints, indexes, and safe rollback strategies.",

  "Optimized a high-volume reconciliation query from 1.8 seconds to 240 milliseconds through query-plan analysis and targeted indexing.",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "FastAPI"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "SQL", "Redis", "Prisma", "RDS"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "Lambda", "ECS", "API Gateway"],
  },
  {
    title: "Quality",
    skills: ["Jest", "Vitest", "Playwright", "CI/CD", "Docker"],
  },
  {
    title: "Engineering",
    skills: [
      "Caching",
      "Queues",
      "Authentication",
      "Observability",
      "Accessibility",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080B12] text-[#F5F7FA]">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(91,140,255,0.13),transparent_26%),radial-gradient(circle_at_85%_25%,rgba(132,94,247,0.08),transparent_25%)]" />

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080B12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <a
            href="#"
            className="group flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="text-xl">RR</span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF] transition-transform group-hover:scale-150" />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#8F97A5] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* RESUME */}
            <a
              href="/Ruthwik_Reddy_Bommana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:border-[#5B8CFF]/40 hover:bg-[#5B8CFF]/10 sm:inline-flex"
            >
              Resume
              <ExternalLink size={14} />
            </a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="rounded-full border border-white/10 p-2 text-[#A5ADBA] transition hover:text-white lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <div className="border-t border-white/[0.06] bg-[#080B12] px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-[#9CA3AF] transition hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Ruthwik_Reddy_Bommana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-[#8FAEFF]"
              >
                View Resume
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* HERO LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5B8CFF]/20 bg-[#5B8CFF]/[0.07] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-[#8FAEFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF]" />
              Hello, I&apos;m Ruthwik Reddy
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[80px]">
              Software Engineer
              <span className="mt-2 block bg-gradient-to-r from-white via-[#CFDAFF] to-[#7EA3FF] bg-clip-text text-transparent">
                building reliable products at scale.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9CA3AF] sm:text-xl">
              I build customer-facing applications and backend services across
              React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, and Azure —
              with a focus on performance, reliability, and maintainable
              systems.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F5F7FA] px-6 py-3.5 text-sm font-semibold text-[#080B12] transition hover:-translate-y-0.5"
              >
                Explore my work

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/Ruthwik_Reddy_Bommana.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                Download resume
                <Download size={16} />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/ruthwikreddie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#7F8794] transition hover:-translate-y-0.5 hover:text-white"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/ruthwik-b-58083b14b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#7F8794] transition hover:-translate-y-0.5 hover:text-white"
              >
                <Linkedin size={21} />
              </a>

              <a
                href="mailto:ruthwikreddybommana342@gmail.com"
                aria-label="Email"
                className="text-[#7F8794] transition hover:-translate-y-0.5 hover:text-white"
              >
                <Mail size={21} />
              </a>
            </div>

            {/* HERO SKILLS */}
            <div className="mt-12 flex max-w-3xl flex-wrap gap-2">
              {heroSkills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#949CAA]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* HERO PHOTO */}
          <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-14 rounded-full bg-[#5B8CFF]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#0F131C] p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px]">
                <Image
                  src="/ae663f9b-1352-4b3d-afcc-91979447177a.jpg"
                  alt="Ruthwik Reddy"
                  fill
                  priority
                  className="object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/75 to-transparent px-6 pb-6 pt-28">
                  <p className="text-xl font-semibold tracking-tight">
                    Ruthwik Reddy
                  </p>

                  <p className="mt-1 text-sm text-[#A5ADBA]">
                    Software Engineer
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Full Stack", "Cloud", "Reliability"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[#C6CCD6] backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/[0.08] bg-[#0F131C]/90 px-5 py-3 shadow-xl backdrop-blur md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#697180]">
                Experience
              </p>

              <p className="mt-1 text-sm font-medium">
                4 years building production systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CREDIBILITY */}
      <section className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["4 Years", "Software Engineering"],
            ["Amazon", "Software Engineer"],
            ["MS CS", "Clemson University"],
            ["AWS", "Solutions Architect"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`py-8 ${
                index % 2 === 0
                  ? "border-r border-white/[0.06]"
                  : ""
              } ${
                index < 2
                  ? "border-b border-white/[0.06] lg:border-b-0"
                  : ""
              } lg:border-r lg:last:border-r-0`}
            >
              <div className="px-4 sm:px-8">
                <p className="text-xl font-semibold tracking-tight">
                  {value}
                </p>

                <p className="mt-1 text-sm text-[#7F8794]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED ENGINEERING WORK */}
      <section
        id="work"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
            01 / Selected Engineering Work
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Problems I&apos;ve worked through.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#9199A7]">
            A few examples of how I approach reliability, performance, and
            production engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {selectedWork.map((work) => {
            const Icon = work.icon;

            return (
              <article
                key={work.number}
                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F131C] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#5B8CFF]">
                    {work.number}
                  </span>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 text-[#8FAEFF]">
                    <Icon size={20} />
                  </div>
                </div>

                <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[#697180]">
                  {work.label}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {work.title}
                </h3>

                <p className="mt-5 flex-1 leading-7 text-[#8F97A5]">
                  {work.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {work.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-[#8F97A5]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
            02 / Experience
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Where I&apos;ve built.
            </h2>

            <a
              href="/Ruthwik_Reddy_Bommana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition hover:text-white"
            >
              Full experience in resume

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-16 space-y-20">
            {/* AMAZON */}
            <article className="grid gap-8 border-t border-white/[0.08] pt-9 lg:grid-cols-[0.3fr_1fr]">
              <div>
                <p className="font-mono text-sm text-[#818A98]">
                  JAN 2024 — PRESENT
                </p>

                <p className="mt-3 text-sm text-[#697180]">
                  Boston, Massachusetts
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-semibold">
                    Software Engineer
                  </h3>

                  <span className="text-lg text-[#8FAEFF]">@ Amazon</span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-[#8F97A5]">
                  Worked across frontend architecture, backend services,
                  database reliability, cloud infrastructure, and production
                  observability for customer-facing applications.
                </p>

                <ul className="mt-7 max-w-4xl space-y-4">
                  {amazonHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 leading-7 text-[#A1A8B3]"
                    >
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B8CFF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "AWS",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-[#8F97A5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* FISERV */}
            <article className="grid gap-8 border-t border-white/[0.08] pt-9 lg:grid-cols-[0.3fr_1fr]">
              <div>
                <p className="font-mono text-sm text-[#818A98]">
                  DEC 2019 — APR 2022
                </p>

                <p className="mt-3 text-sm text-[#697180]">
                  Hyderabad, India
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl font-semibold">
                    Software Developer
                  </h3>

                  <span className="text-lg text-[#8FAEFF]">@ Fiserv</span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-[#8F97A5]">
                  Built and supported banking applications across TypeScript,
                  Node.js, PostgreSQL, Azure services, testing, and production
                  monitoring.
                </p>

                <ul className="mt-7 max-w-4xl space-y-4">
                  {fiservHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 leading-7 text-[#A1A8B3]"
                    >
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B8CFF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Azure",
                    "Docker",
                    "Jest",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-[#8F97A5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
          03 / About
        </p>

        <div className="mt-7 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="max-w-sm text-4xl font-semibold tracking-tight sm:text-5xl">
            Engineering with the whole system in mind.
          </h2>

          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#9CA3AF]">
            <p>
              I&apos;m a software engineer with 4 years of experience building
              customer-facing applications and backend services. My work has
              covered frontend architecture, REST APIs, relational databases,
              cloud infrastructure, automated testing, and production
              observability.
            </p>

            <p>
              I enjoy engineering problems where application design meets
              scale — improving performance, handling failures safely,
              simplifying complex systems, and making software easier to
              operate and maintain.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
            04 / Technical Toolkit
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technologies I work with.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[24px] border border-white/[0.08] bg-[#0F131C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5B8CFF]/25"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-[#949CAA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#697180]">
            Additional technologies and tooling are listed in my full resume.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section
        id="credentials"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
          05 / Credentials
        </p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Certification & education.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* CERTIFICATION */}
          <div className="rounded-[28px] border border-[#5B8CFF]/20 bg-[#5B8CFF]/[0.05] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8FAEFF]">
              Certification
            </p>

            <h3 className="mt-5 text-2xl font-semibold leading-8">
              AWS Certified Solutions Architect – Associate
            </h3>
          </div>

          {/* CLEMSON */}
          <div className="rounded-[28px] border border-white/[0.08] bg-[#0F131C] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#697180]">
              Graduate
            </p>

            <h3 className="mt-5 text-2xl font-semibold">
              Master of Science
            </h3>

            <p className="mt-2 text-[#A1A8B3]">
              Computer Science
            </p>

            <p className="mt-6 text-sm text-[#8FAEFF]">
              Clemson University
            </p>

            <p className="mt-1 text-sm text-[#697180]">
              South Carolina
            </p>
          </div>

          {/* LPU */}
          <div className="rounded-[28px] border border-white/[0.08] bg-[#0F131C] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#697180]">
              Undergraduate
            </p>

            <h3 className="mt-5 text-2xl font-semibold">
              Bachelor of Technology
            </h3>

            <p className="mt-2 text-[#A1A8B3]">
              Computer Engineering
            </p>

            <p className="mt-6 text-sm text-[#8FAEFF]">
              Lovely Professional University
            </p>

            <p className="mt-1 text-sm text-[#697180]">
              India
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-24 border-t border-white/[0.06] bg-[#0F131C]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5B8CFF]">
            06 / Contact
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#929AA8]">
            Interested in software engineering opportunities involving
            full-stack development, backend systems, cloud infrastructure, or
            production-scale applications.
          </p>

          <a
            href="mailto:ruthwikreddybommana342@gmail.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#080B12] transition hover:-translate-y-1"
          >
            Get in touch

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <div className="mt-9 flex justify-center gap-7">
            <a
              href="https://github.com/ruthwikreddie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#737C89] transition hover:-translate-y-0.5 hover:text-white"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ruthwik-b-58083b14b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#737C89] transition hover:-translate-y-0.5 hover:text-white"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:ruthwikreddybommana342@gmail.com"
              aria-label="Email"
              className="text-[#737C89] transition hover:-translate-y-0.5 hover:text-white"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#080B12]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-[#616977] sm:flex-row lg:px-8">
          <p>© 2026 Ruthwik Reddy</p>

          <p>Software Engineer · Full Stack · Cloud</p>
        </div>
      </footer>
    </main>
  );
}