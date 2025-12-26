// IndividualBand.tsx
export default function IndividualBand() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-8 bg-brand-peach">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Individual Services
            </h2>
            <p className="text-xl text-brand-muted mb-8 leading-relaxed max-w-lg">
              Personalized support with patience and real-world experience.
            </p>
            <ul className="space-y-3 text-lg mb-12">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-terracotta rounded-full mt-2 flex-shrink-0"></span>
                One-on-one tutoring in tech, business, and creative skills
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-terracotta rounded-full mt-2 flex-shrink-0"></span>
                Reliable cat & house sitting in Vail and surrounding areas
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-terracotta rounded-full mt-2 flex-shrink-0"></span>
                Flexible scheduling, clear communication, trusted care
              </li>
            </ul>
            <a 
              href="/individual-services" 
              className="px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200 inline-block"
            >
              See Individual Services →
            </a>
          </div>
          
          <div className="space-y-6 lg:text-right">
            <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">Tutoring</h3>
              <p className="text-brand-muted mb-4">Patient 1:1 help from a former university instructor</p>
              <a href="/individual-services/tutoring" className="text-brand-terracotta font-semibold hover:text-brand-rust transition-colors inline-flex items-center">
                Book Tutoring →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-2">Cat & House Sitting</h3>
              <p className="text-brand-muted mb-4">Reliable Vail-area care for pets and homes</p>
              <a href="/individual-services/cat-house-sitting" className="text-brand-terracotta font-semibold hover:text-brand-rust transition-colors inline-flex items-center">
                Check Availability →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
