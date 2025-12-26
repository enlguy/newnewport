import Link from 'next/link';
import NavBar from '../components/NavBar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero: The Person Behind the Work */}
      <section className="pt-20 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-peach/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-10 overflow-hidden border-4 border-white shadow-2xl">
             <img 
               src="/me5.jpg" 
               alt="Jack Epner" 
               className="w-full h-full object-cover"
             />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            A life lived in <span className="text-brand">color</span>, <br/>
            not just on a screen.
          </h1>
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            "I believe the best work happens when we lead with empathy, 
            stay curious, and remember that there’s a human—or an animal—at the heart of every project."
          </p>
        </div>
      </section>

      {/* The Narrative Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-foreground/80 leading-relaxed space-y-8">
          <p>
            If you looked at my resume, you’d see two decades of seemingly different worlds: 
            <strong> RevOps, data architecture, and web development</strong> on one side; <strong>global education and estate caretaking</strong> on the other. 
            To me, they're just different itches to scratch - one focused more on logic and creative problem-solving, the other on empathy and connection.
          </p>

          <p>
            I’ve spent 12 years living abroad, settling into 16 different countries and 
            traveling through dozens more. Those years didn’t just teach me how to navigate 
            unfamiliar places; they taught me a lot about humanity. I’ve learned that whether 
            I’m untangling a messy HubSpot portal or helping a student find their confidence 
            in a difficult subject, the most important thing I can bring is <strong>my deep intuition.</strong>
          </p>

          <p>
            I have strong empathy and a 
            natural shorthand with animals—a quiet understanding that makes me a 
            trusted pair of hands for homeowners—and I bring that same grounded, 
            perceptive energy to my professional clients. I listen.
          </p>

          <div className="py-8">
            <blockquote className="border-l-4 border-brand-peach pl-6 italic text-2xl text-foreground/90 font-medium">
              "I don't just build systems; I create breathing room for people to thrive."
            </blockquote>
          </div>

          <p>
            My work in RevOps (including building my own data tools) comes from a 
            desire to make things simpler and kinder for the people using them. 
            My work in tutoring and caretaking comes from a desire to protect and 
            nurture. 
          </p>
          
          <p>
            I’ve lived a lot of life in 40+ countries, and it has left me with a 
            mature, calm perspective. Whether you need a strategist, a teacher, 
            or a guardian for your home, you’re getting someone who treats your 
            world with the same care and respect I’ve learned to give the world at large.
          </p>
        </div>
      </section>

      {/* Experience / Human Stats */}
      <section className="py-20 bg-brand-peach/5 border-y border-brand-peach/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl font-bold text-brand">12</p>
              <p className="text-sm uppercase tracking-widest text-foreground/60 mt-2 font-semibold">Years Abroad</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand">16</p>
              <p className="text-sm uppercase tracking-widest text-foreground/60 mt-2 font-semibold">Home Bases</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand">6</p>
              <p className="text-sm uppercase tracking-widest text-foreground/60 mt-2 font-semibold">Years in RevOps</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand">∞</p>
              <p className="text-sm uppercase tracking-widest text-foreground/60 mt-2 font-semibold">Curiosity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values: The "Jack" Way */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How I Show Up</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-peach/20 rounded-2xl flex items-center justify-center mx-auto text-2xl">🌿</div>
              <h4 className="font-bold text-xl">Calm Presence</h4>
              <p className="text-foreground/70 leading-relaxed">I’ve handled high-pressure business launches and remote living challenges with the same steady hand.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-peach/20 rounded-2xl flex items-center justify-center mx-auto text-2xl">🐕</div>
              <h4 className="font-bold text-xl">Deep Connection</h4>
              <p className="text-foreground/70 leading-relaxed">Whether it’s an anxious pet or an overwhelmed student, I have an intuitive knack for building trust.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-peach/20 rounded-2xl flex items-center justify-center mx-auto text-2xl">✨</div>
              <h4 className="font-bold text-xl">High Standards</h4>
              <p className="text-foreground/70 leading-relaxed">I value quality and honesty above all else. If I'm involved, it's going to be done right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-rust/5 rounded-[3rem] p-12 border border-brand-rust/10">
            <h2 className="text-4xl font-bold mb-6">Let's talk.</h2>
            <p className="text-xl text-foreground/70 mb-10 max-w-xl mx-auto">
              I’m always open to new connections—whether you’re looking for a partner 
              for your business or a guardian for your home.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-12 py-5 bg-brand text-background font-bold rounded-2xl hover:bg-brand-rust transition-all shadow-xl hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}