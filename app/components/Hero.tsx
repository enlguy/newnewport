import React from 'react';

export default function Hero() {
  return (
    <section className="bg-brand-bg py-3 md:py-20 px-10 min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        {/* Left Column: The Hook */}
        <div>
          <span className="text-brand-terracotta font-semibold tracking-wide uppercase text-sm">
            Jack Epner • From Vail, CO • living globally
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mt-4 mb-6 leading-tight">
            Helping businesses, learners, and pets thrive.
          </h1>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed max-w-lg">
            I’ve led RevOps initiatives with the C-Suite, taught at a university, and built full stack web solutions.
              I've also cared for pets and homes across many countries, and made feature films. 
            Now, I partner with businesses and individuals to solve practical 
            problems with empathy and technology.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="/business-services" className="cursor-pointer px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200">
              For Businesses
            </a>
            <a href="/individual-services" className="px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200">
              For Individuals
            </a>
            <a href="/about" className="text-lg bg-white border border-brand-border text-brand hover:bg-brand-muted px-6 py-3 rounded-xl hover:border-brand-terracotta font-medium transition-all duration-200">
              About Me
            </a>
          </div>
        </div>

        {/* Right Column: The Visual Representative */}
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-brand-border/30 overflow-hidden shadow-inner relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-terracotta/10 to-transparent"></div>
            <img 
      src="/me.webp"
      alt="Jack Epner - Professional Educator and Caretaker"
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
    />
           </div>
          </div>
        </div>
    </section>
  );
}