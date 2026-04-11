"use client";

import React from 'react';

export default function DesignPreview() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Navigation Preview */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-xl font-bold tracking-tight">SYLVAAN.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-emerald-700 transition-colors">Work</a>
          <a href="#" className="hover:text-emerald-700 transition-colors">About</a>
          <a href="#" className="hover:text-emerald-700 transition-colors">Services</a>
          <a href="#" className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section Prototype */}
      <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
        
        {/* Photo Left Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] bg-emerald-50 rounded-2xl overflow-hidden shadow-2xl group border border-slate-200">
            <img 
              src="/profile.jpg" 
              alt="Sylvaan Profile" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback text if image is missing */}
            <div className="absolute inset-0 flex items-center justify-center text-emerald-800/50 font-medium italic -z-10 text-center px-4">
               Simpan foto LinkedIn Anda sebagai<br/>/public/profile.jpg
            </div>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Text Right Side */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-100">
              Personal Branding
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
               Crafting Digital <span className="text-emerald-700">Experiences</span> with Precision.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
               I am a Creative Developer based in Indonesia, focused on building professional, clean, and high-performance digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 hover:translate-y-[-2px] active:translate-y-[0] transition-all">
               View My Portfolio
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-all">
               Let's Collaborate
            </button>
          </div>

          {/* Social Socials Preview */}
          <div className="pt-8 flex gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-slate-600">
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">GitHub</a>
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">LinkedIn</a>
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors">X / Twitter</a>
          </div>
        </div>
      </section>

      {/* Subtle Gradient Background Ornaments */}
      <div className="fixed -z-10 top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -z-10 bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
