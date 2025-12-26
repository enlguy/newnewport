import NavBar from "@/app/components/NavBar";

const technologies = [
  { name: 'React', bg: '#118499', text: '#18181b', border: '#18181b' },  
  { name: 'Next.js', bg: '#18181b', text: '#ffffff', border: '#27272a' },
  { name: 'TypeScript', bg: '#ec8b2b', text: '#18181b', border: '#18181b' },
  { name: 'TailwindCSS', bg: '#ece52b', text: '#ffffff', border: '#18181b' },
  { name: 'Remix', bg: '#ef50f1', text: '#ffffff', border: '#18181b' },
  { name: 'Node.js', bg: '#119914', text: '#18181b', border: '#18181b' },
  { name: 'Express', bg: '#f15069', text: '#ffffff', border: '#18181b' },
  { name: 'Postgres', bg: '#ac432a', text: '#18181b', border: '#18181b' },
];

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Web Development
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            I build fast, responsive, and accessible web applications using the 
            latest technologies. My focus is on clean code and intuitive user experiences.
          </p>
        </section>

        {/* Tech Stack Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {technologies.map((tech) => (
            <div key={tech.name} style={{ 
      backgroundColor: tech.bg, 
      color: tech.text, 
      borderColor: tech.border 
    }} className="p-6 border rounded-2xl text-center font-bold transition-all hover:scale-105">
              {tech.name}
            </div>
          ))}
        </section>

        {/* The GitHub "Card" */}
        <section className="bg-brand-peach/20 rounded-3xl p-8 md:p-12 border border-brand-peach">
          <h2 className="text-2xl font-bold mb-4 text-brand-rust">The Source Code</h2>
          <p className="text-lg mb-8 opacity-90">
            I believe in transparent, maintainable code. You can view my current projects, 
            contributions, and the architecture of this very site on my GitHub.
          </p>
          <a 
            href="https://github.com/enlguy" 
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </section>
      </main>
    </div>
  );
}