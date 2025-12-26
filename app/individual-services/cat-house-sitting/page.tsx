import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function HouseSittingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-brand-peach/10">
      <NavBar />
      
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-brand-peach/30 to-brand/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand to-brand-rust bg-clip-text text-transparent mb-6">
            Global Live-In Care <br /> for Your Home & Pets
          </h1>
          <p className="text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional, live-in house and pet sitting for travelers who value peace of mind. 
            Whether you have a full house of animals or just need your property maintained, 
            I ensure everything stays exactly as you left it (or better).
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand text-background text-lg font-semibold rounded-2xl hover:bg-brand-rust transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Inquire About My Travel Schedule
          </Link>
        </div>
      </section>

      {/* Why Live-In? */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Dedicated Caretaker Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-brand-peach/20 rounded-2xl p-8 group hover:bg-brand-peach/40 transition-all duration-300 border border-brand-peach/30">
              <h3 className="text-2xl font-semibold text-brand mb-4">Pet Companionship</h3>
              <p className="text-lg text-foreground/80">
                I provide 24/7 presence for your animals, maintaining their routine in their own environment. 
                From walks to specialized care, they get the attention they deserve without the stress of a change in environment or void of companionship.
              </p>
            </div>

            <div className="bg-brand-peach/20 rounded-2xl p-8 group hover:bg-brand-peach/40 transition-all duration-300 border border-brand-peach/30">
              <h3 className="text-2xl font-semibold text-brand mb-4">Property Security</h3>
              <p className="text-lg text-foreground/80">
                A live-in presence is the best security. I handle mail, package reception, plant care, and general maintenance while 
                ensuring your home looks lived-in and remains secure while you're abroad.
              </p>
            </div>

            <div className="bg-brand-peach/20 rounded-2xl p-8 group hover:bg-brand-peach/40 transition-all duration-300 border border-brand-peach/30">
              <h3 className="text-2xl font-semibold text-brand mb-4">Reliable Updates</h3>
              <p className="text-lg text-foreground/80">
                Enjoy your trip without worry. I provide regular check-ins and updates on your 
                pets and property so you know everything is running smoothly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Global Aspect */}
      <section className="py-24 bg-brand/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Wherever You Are, I Can Be There</h2>
          <p className="text-xl text-foreground/80 mb-12">
            I work with clients globally. If you are planning an extended trip and need a mature, 
            professional person to look after your home and furry loved ones, let's talk.
          </p>
          <div className="bg-background/60 p-8 rounded-3xl border border-brand-peach/30 inline-block">
             <p className="text-lg font-medium text-brand-rust">Excellent global references available upon request</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-brand to-brand-rust p-1 rounded-3xl">
            <div className="bg-background rounded-[20px] p-12">
              <h2 className="text-3xl font-bold mb-6">Plan Your Next Trip With Confidence</h2>
              <p className="text-lg text-foreground/80 mb-8">
                I book several months in advance for international stays. Reach out today to check 
                availability for your upcoming travel dates.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 bg-brand text-background text-xl font-bold rounded-2xl hover:bg-brand-rust transition-all duration-300"
              >
                Request Dates →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}