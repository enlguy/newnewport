// app/business-services/page.tsx
import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function BusinessServices() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-20 lg:pb-32 px-4 lg:px-8 bg-gradient-to-b from-background to-brand-teal/5">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-4 inline-block">
            Business Services
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Operations & Automation
          </h1>
          <p className="text-xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Clean data. Streamlined workflows. Reliable systems. Helping SMBs scale without chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Link href="/business-services/#highlights" className="px-8 py-4 bg-brand-teal text-white rounded-xl font-semibold text-lg shadow-md hover:bg-background hover:text-brand-teal hover:shadow-lg transition-all duration-200 flex-1 text-center">
              HubProsper
            </Link>
            <Link href="/business-services/#highlights" className="px-8 py-4 border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold text-lg rounded-xl transition-all duration-200 flex-1 text-center">
              NORMLZ
            </Link>
            <Link href="/business-services/webdev" className="px-8 py-4 bg-brand-teal text-white rounded-xl font-semibold text-lg shadow-md hover:bg-background hover:text-brand-teal hover:shadow-lg transition-all duration-200 flex-1 text-center">
              Web Development
            </Link>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 lg:py-32 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto" id="highlights">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What growing businesses need
              </h2>
              <p className="text-xl text-brand-muted mb-8 leading-relaxed max-w-lg">
                Your tools don't talk to each other. Data is messy. Processes break at scale.
              </p>
              <ul className="space-y-4 text-lg mb-12">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                  CRM cleanup & data migration
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                  Marketing automation setup
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                  Email deliverability monitoring
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                  Custom web tools & integrations
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">HubProsper</h3>
                <p className="text-brand-muted mb-6 leading-relaxed">
                  Operations consulting & automation for SMBs fighting data chaos and tool sprawl.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-muted">Starting at $2k/project</span>
                  <Link href="https://hubprosper.com/" target="_blank" className="text-brand-teal font-semibold hover:text-brand-rust transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">NORMLZ</h3>
                <p className="text-brand-muted mb-6 leading-relaxed">
                  Email deliverability monitoring and inbox placement optimization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-muted">$250/month</span>
                  <Link href="https://normlz.com/" target="_blank" className="text-brand-teal font-semibold hover:text-brand-rust transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 px-4 lg:px-8 bg-brand-teal/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to fix your operations?
          </h2>
          <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
            Free 30-minute audit of your current setup. No obligation.
          </p>
          <Link href="/contact" className="px-12 py-6 bg-brand-teal text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-brand-teal/90 hover:shadow-2xl transition-all duration-200 inline-block">
            Book Free Audit
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
