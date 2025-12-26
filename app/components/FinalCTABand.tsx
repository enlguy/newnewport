export default function FinalCTABand() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-8 bg-gradient-to-b from-brand-peach/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-brand-muted mb-12 leading-relaxed max-w-2xl mx-auto">
          Whether you need operations help for your business or personalized support for you or your pets, 
          let's solve your problem together.
        </p>
        <div className="space-y-4 lg:flex lg:gap-4 lg:space-y-0 lg:justify-center">
          <a href="/business-services" className="block px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200">
            Business Services
          </a>
          <a href="/individual-services" className="block px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200">
            Individual Services
          </a>
        </div>
      </div>
    </section>
  );
}
