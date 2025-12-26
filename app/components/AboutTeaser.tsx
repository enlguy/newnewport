// AboutTeaser.tsx
export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/50 backdrop-blur-sm p-12 lg:p-20 rounded-3xl border border-brand-border shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why I do this
          </h2>
          <p className="text-xl text-brand-muted mb-8 leading-relaxed max-w-3xl mx-auto">
            I've lived in 16 countries across 4 continents, led sales teams through rapid growth, taught at university, 
            produced feature films, and rescued animals. That global experience taught me adaptability, patience, 
            and how to solve real problems with practical solutions.
          </p>
          <p className="text-lg text-brand-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            Now I bring that same approach to businesses needing operations help, students wanting clear guidance, 
            and pet owners seeking trusted care—always with empathy first, technology second.
          </p>
          <a 
            href="/about" 
            className="px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold text-lg shadow-md hover:bg-brand-rust hover:shadow-lg transition-all duration-200 inline-block"
          >
            Read my story →
          </a>
        </div>
      </div>
    </section>
  );
}
