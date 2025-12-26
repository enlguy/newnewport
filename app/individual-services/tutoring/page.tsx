import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function TutoringPage() {
  return (
    <main>
      <NavBar />
      <div className="bg-gradient-to-b from-background to-brand-peach/10 pt-24">
        
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gradient-to-r from-brand-peach/20 to-brand/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand to-brand-rust bg-clip-text text-transparent mb-6 leading-tight">
              Master the Subject. <br />Build the Confidence.
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Seven years of global teaching experience distilled into 1-on-1 sessions. From Ivy League hopefuls to students who just need a win—I help you find your "click" moment.
            </p>
            <div className="bg-brand-peach/30 rounded-2xl p-6 mb-8 max-w-md mx-auto border border-brand-peach/50">
              <p className="text-lg font-semibold text-brand mb-1">Real Growth, Quantified</p>
              <p className="text-sm text-foreground/70">+5 ACT points average | 20-40% grade increases per semester</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand text-background text-lg font-semibold rounded-2xl hover:bg-brand-rust transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Start With a Free Strategy Call →
            </Link>
          </div>
        </section>

        {/* Meet Your Tutor */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-brand to-brand-rust bg-clip-text text-transparent">
                Meet Jack Epner
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                I’ve taught in 7 countries, helping everyone from preschoolers to corporate executives master the English language and ace high-stakes exams.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-foreground mb-6">A Different Approach</h3>
                <div className="space-y-4 text-lg text-foreground/90">
                  <p className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center font-bold text-background text-sm mt-0.5">1</span>
                    <span><strong>Student-Focused:</strong> I enjoy building relationships with my students, and have worked with all backgrounds, from remedial inner-city learners, to Ive League hopefuls trying to squeeze out one extra point on the ACT.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center font-bold text-background text-sm mt-0.5">2</span>
                    <span><strong>Tailored Curriculum:</strong> Whether it’s Pre-Calc or ESL fluency, we build a roadmap based on your specific gaps and goals.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center font-bold text-background text-sm mt-0.5">3</span>
                    <span><strong>Full Visibility:</strong> Weekly reports keep parents and students on the same page. No guesswork involved.</span>
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-brand-peach/20 to-brand-rust/10 rounded-3xl p-12 border border-brand-peach/30">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-brand to-brand-rust rounded-full mx-auto mb-4 shadow-2xl"></div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Expert Instruction</h4>
                  <p className="text-brand text-lg font-semibold">99th percentile scorer | Kaplan Alum</p>
                </div>
                <ul className="space-y-3 text-lg text-foreground/80">
                  <li>• 7+ Years Professional Teaching and Tutoring Experience</li>
                  <li>• International Teaching Portfolio including university instruction</li>
                  <li>• Expert in Math & ACT/SAT Prep</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-r from-brand-peach/20 to-brand/10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-brand-peach/30">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-brand to-brand-rust bg-clip-text text-transparent">
                Ready to Level Up?
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Rates start at <span className="text-3xl font-bold text-brand">$50/hr</span>. Includes all materials, custom diagnostic testing, and global scheduling.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand to-brand-rust text-background text-xl font-bold rounded-3xl hover:from-brand-rust hover:to-brand transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 block w-full sm:w-auto mx-auto"
              >
                Book Your Free Intro Call →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}