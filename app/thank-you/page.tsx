import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-md mx-auto text-center bg-white p-12 rounded-3xl border border-brand-border shadow-xl">
        <div className="w-20 h-20 bg-brand-terracotta/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Thanks!</h1>
        <p className="text-lg text-brand-muted mb-8">
          Got your message. Reply coming within 24 hours.
        </p>
        <Link href="/" className="px-8 py-4 bg-brand-terracotta text-white rounded-xl font-semibold shadow-md hover:bg-brand-rust transition-all">
          Back to home
        </Link>
      </div>
    </div>
  );
}
