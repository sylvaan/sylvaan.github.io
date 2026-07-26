"use client";

import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS, EXPERIENCES, CERTIFICATIONS } from "../data/portfolio";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <div className="relative min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* ---------- SOLID BASE BACKGROUND ---------- */}
      <div className="absolute inset-0 -z-30 bg-white pointer-events-none" />

      {/* ---------- LINEAR GRID BACKGROUND ---------- */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* ---------- NAVIGATION ---------- */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-xl font-bold tracking-tight">SYLVAAN.</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#work" className="hover:text-emerald-700 transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-emerald-700 transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        {/* ---------- HERO SECTION ---------- */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
          {/* Photo Left Side */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl group border-[6px] border-white ring-4 ring-slate-100/50 rotate-2 hover:rotate-0 transition-all duration-500">
              <Image
                src="/profile.jpeg"
                alt="Ahmad Ridhwan Naufal Profile"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-[50%_40%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Text Right Side */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-2 items-start">
                <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                  Ahmad Ridhwan Naufal
                </span>
                <span className="-ml-3 inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-100">
                  Frontend Software Engineer
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Building <span className="text-emerald-700">Scalable</span>{" "}
                Mobile & Web Apps.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
                A Frontend Developer with a 4+ year track record. I build frontend applications for 
                healthcare and enterprise products — mostly Angular and React, always TypeScript.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#work"
                className="px-8 py-4 bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 hover:translate-y-[-2px] active:translate-y-[0] transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-all"
              >
                Let's Collaborate
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex gap-4 text-slate-700">
              <a
                href="https://github.com/sylvaan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arnaufall/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* ---------- PROJECTS SHOWCASE ---------- */}
        <section
          id="work"
          className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-100"
        >
          {/* Section Head */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                Selected <span className="text-emerald-700">Projects</span>
              </h2>
              <p className="text-lg text-slate-500">
                A collection of my recent work across web development and digital experiences.
              </p>
            </div>
            <a
              href="https://github.com/sylvaan"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
            >
              View full archive
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Professional", "Personal"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === f ? "bg-emerald-700 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}
              >
                {f} Projects
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            key={filter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {filteredProjects.map((project) => (
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.id}
                className="group block"
              >
                {/* Image / Visual Area */}
                <div
                  className={`relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-white bg-gradient-to-br transition-all duration-500 border border-slate-100 ${project.hoverBorder} ${project.hoverShadow} ${project.image && !project.isMobile ? "" : project.gradient}`}
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className={`${project.isMobile ? "object-contain p-4" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                      <span
                        className={`font-bold opacity-30 ${project.accent}`}
                      >
                        Work In Progress 🚧
                      </span>
                      <div className="w-24 h-24 bg-white/40 backdrop-blur-md rounded-xl rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-slate-400 bg-white border border-slate-200 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile view full archive link */}
          <div className="mt-12 md:hidden">
            <a
              href="https://github.com/sylvaan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
            >
              View full archive
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </section>

        {/* ---------- EXPERIENCE & CERTIFICATIONS ---------- */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-8 py-24 border-t border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Column */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">
                Work & <span className="text-emerald-700">Education</span>
              </h2>
              <div className="space-y-10">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 border-l w-full border-slate-200"
                  >
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border-2 border-emerald-700 bg-white" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-bold text-emerald-700">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-slate-500 font-medium mb-3">
                      {exp.company}
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">
                Licenses &{" "}
                <span className="text-emerald-700">Certifications</span>
              </h2>
              <div className="space-y-6">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    key={cert.id}
                    className="block group p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl border border-slate-100 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                      {cert.name}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT / FOOTER ---------- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="contact"
          className="max-w-7xl mx-auto px-8 pt-12 pb-24"
        >
          <div className="flex flex-col items-center justify-center text-center space-y-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-12 md:p-24 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Let's Build Something <span className="text-emerald-700">Great.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
              I am currently open to discussing new opportunities and building projects, particularly in product-focused companies.
            </p>
            <a 
              href="mailto:arnaufal96@gmail.com"
              className="inline-block px-10 py-4 bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-16 text-center text-slate-400 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Ahmad Ridhwan Naufal. All rights reserved.
          </div>
        </motion.section>
      </main>

      {/* ---------- ORNAMENTS ---------- */}
      <div className="fixed -z-10 top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-emerald-400/15 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="fixed -z-10 top-[25%] right-[-10%] w-[40vw] h-[40vw] bg-blue-400/15 rounded-full blur-[130px] animate-float-delayed pointer-events-none" />
    </div>
  );
}
