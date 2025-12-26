// BusinessBand.tsx
export default function BusinessBand() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Business Services
            </h2>
            <p className="text-xl text-brand-muted mb-8 leading-relaxed max-w-lg">
              Streamline operations, fix data chaos, and scale without the headaches.
            </p>
            <ul className="space-y-3 text-lg mb-12">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                RevOps & CRM cleanup for growing SMBs
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                Marketing automation & email deliverability
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></span>
                Custom web solutions & workflow automation
              </li>
            </ul>
            <a 
              href="/business-services" 
              className="px-8 py-4 bg-brand-teal text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-teal/80 hover:shadow-lg transition-all duration-200 inline-block"
            >
              See Business Services →
            </a>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">HubProsper</h3>
              <p className="text-brand-muted mb-4">Operations & automation for SMBs</p>
              <a href="/business-services/hubprosper" className="text-brand-teal font-semibold hover:text-brand-teal/80 transition-colors">
                Explore HubProsper →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">NORMLZ</h3>
              <p className="text-brand-muted mb-4">Email deliverability monitoring</p>
              <a href="/business-services/normlz" className="text-brand-teal font-semibold hover:text-brand-teal/80 transition-colors">
                Explore NORMLZ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
