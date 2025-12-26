import React from 'react';

export default function ServiceCards() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-charcoal mb-12 text-center md:text-left">
          Ways we can work together
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Card 1: HubProsper */}
          <div className="group p-6 rounded-2xl border border-brand-border bg-white hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-brand-teal mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">HubProsper</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              Clean up your data, automate workflows, and get your SaaS tools working together seamlessly.
            </p>
            <a href="/hubprosper" className="text-brand-teal font-semibold text-sm inline-flex items-center hover:underline">
              Explore Operations →
            </a>
          </div>

          {/* Card 2: NORMLZ */}
          <div className="group p-6 rounded-2xl border border-brand-border bg-white hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-brand-teal mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">NORMLZ</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              Automated data cleansing for HubSpot. Ensure your email deliverability and CRM health stay pristine.
            </p>
            <a href="/normlz" className="text-brand-teal font-semibold text-sm inline-flex items-center hover:underline">
              View Data Tools →
            </a>
          </div>

          {/* Card 3: Tutoring */}
          <div className="group p-6 rounded-2xl border border-brand-border bg-brand-surface/30 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-terracotta mb-4 group-hover:bg-brand-terracotta group-hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Tutoring</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              Patient, structured study support from a former university instructor. Academic and technical coaching.
            </p>
            <a href="/tutoring" className="text-brand-terracotta font-semibold text-sm inline-flex items-center hover:underline">
              Tutoring details →
            </a>
          </div>

          {/* Card 4: Stewardship */}
          <div className="group p-6 rounded-2xl border border-brand-border bg-brand-surface/30 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-terracotta mb-4 group-hover:bg-brand-terracotta group-hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Property Care</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              Reliable, detail-oriented stewardship for your pets and home. High-trust care with a global perspective.
            </p>
            <a href="/stewardship" className="text-brand-terracotta font-semibold text-sm inline-flex items-center hover:underline">
              Cat & house sitting →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}