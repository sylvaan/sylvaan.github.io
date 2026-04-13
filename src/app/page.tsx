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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
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
            <div className="relative w-full max-w-sm aspect-square bg-emerald-50 rounded-full overflow-hidden shadow-2xl group border-[6px] border-white ring-4 ring-emerald-50/50">
              <Image
                src="/profile.jpeg"
                alt="Ahmad Ridhwan Naufal Profile"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-[50%_40%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-emerald-800/50 font-medium italic -z-10 text-center px-4">
                Add profile.jpg
                <br />
                in public folder
              </div>
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <div className="pt-8 flex gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-slate-600">
              <a
                href="https://github.com/sylvaan"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-ridhwan-naufal/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/ahmadd.riidhwan/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
              >
                Instagram
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
                A collection of my recent work across web development, UI/UX
                design, and digital experiences.
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
                  className={`relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br transition-all duration-500 border border-slate-100 ${project.image && !project.isMobile ? "" : project.gradient}`}
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
                Work <span className="text-emerald-700">Experience</span>
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
              I am currently open to discussing new opportunities, building ambitious projects, or tackling complex engineering challenges.
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
      <div className="fixed -z-10 top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -z-10 top-[40%] right-[-10%] w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
