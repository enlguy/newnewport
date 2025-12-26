import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';

const IndividualServicesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 bg-gradient-to-b from-brand-peach/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Individual <span className="text-brand">Services</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Personalized support for your family’s education and your home’s security. 
            I bring a mature, global perspective to every engagement.
          </p>
        </div>
      </section>

      {/* Services Stack */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Private Tutoring Section */}
          <div className="group bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-brand-peach/10 transition-all duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand font-bold text-sm uppercase tracking-widest">
                  Academic Excellence
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Private Tutoring & Test Prep</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  With seven years of experience—including several years with Kaplan Premier—I’ve helped students move from remedial challenges to Harvard-level applications. My approach is intuitive, meeting students where they are to build genuine confidence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mr-4 mt-1">✓</span>
                    <p className="text-foreground/80 font-medium">Mathematics: Geometry, Trig, Algebra II, Pre-Calc</p>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mr-4 mt-1">✓</span>
                    <p className="text-foreground/80 font-medium">Standardized Tests: Scored in the 99th percentile for ACT and SAT</p>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mr-4 mt-1">✓</span>
                    <p className="text-foreground/80 font-medium">English: Grammar, Writing, and ESL support for non-native speakers</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-brand text-background font-bold py-4 px-10 rounded-2xl transition-all hover:bg-brand-rust shadow-lg"
                  >
                    Inquire About Tutoring
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-inner border-8 border-brand-peach/5">
                  <img 
                    src="/tutoring-visual.jpg" 
                    alt="Private Tutoring" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* House Sitting Section */}
          <div className="group bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-brand-peach/10 transition-all duration-300 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-inner border-8 border-brand-peach/5">
                  <img 
                    src="/house-sitting-visual.jpg" 
                    alt="House and Pet Sitting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-rust/10 text-brand-rust font-bold text-sm uppercase tracking-widest">
                  Global Stewardship
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Global House & Pet Sitting</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  For homeowners seeking absolute peace of mind. My 12 years of global living have made me an expert in managing high-end properties and connecting deeply with the animals that live there. I provide a calm, mature, and highly responsible presence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-rust/20 flex items-center justify-center mr-4 mt-1">🐕</span>
                    <p className="text-foreground/80 font-medium">Deeply intuitive with pets and specialized care needs</p>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-rust/20 flex items-center justify-center mr-4 mt-1">🏡</span>
                    <p className="text-foreground/80 font-medium">Full property maintenance and security for luxury estates</p>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-rust/20 flex items-center justify-center mr-4 mt-1">🌍</span>
                    <p className="text-foreground/80 font-medium">Available for international travel and long-term assignments</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-brand-rust text-background font-bold py-4 px-10 rounded-2xl transition-all hover:bg-opacity-90 shadow-lg"
                  >
                    Discuss House Sitting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Social Proof Footer */}
      <section className="py-24 bg-brand-peach/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Built on trust and integrity.</h3>
          <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
            References for both academic tutoring and high-end property management 
            are available upon request for serious inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="text-brand font-bold hover:text-brand-rust transition-colors underline underline-offset-8"
            >
              Learn more about my background →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndividualServicesPage;