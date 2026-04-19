import { notFound } from "next/navigation";

const projects = {
  "pawan-infra": {
    title: "Pawan Infra Developer",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80",
    problem:
      "The client lacked a strong digital presence and was missing high-quality branding to attract premium real estate buyers.",
    strategy:
      "We focused on premium positioning, clean UI, and trust-building visuals to appeal to high-value customers.",
    execution:
      "Developed a modern responsive website with structured layouts, strong visual hierarchy, and performance optimization.",
    results: [
      "📈 Increased inquiries by 2.5x",
      "🏗️ Stronger brand perception",
      "⚡ Faster website performance",
    ],
    link: "https://pawaninfradeveloper.in/",
  },

  "krishna-portfolio": {
    title: "Krishna Portfolio",
    category: "Personal Branding",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1800&q=80",
    problem:
      "Needed a modern portfolio to showcase skills and projects professionally.",
    strategy:
      "Minimal, clean layout with strong typography and focus on personal brand identity.",
    execution:
      "Built a responsive portfolio with smooth animations and modern UI.",
    results: [
      "💼 Strong personal branding",
      "📱 Fully responsive design",
      "⚡ Smooth user experience",
    ],
    link: "https://krishna-portfolio-ruby.vercel.app/",
  },

  chamber: {
    title: "Chamber Platform",
    category: "Legal Tech",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=80",
    problem:
      "Legal professionals struggled with accessing structured legal information efficiently.",
    strategy:
      "Create a searchable, structured legal system with intuitive navigation.",
    execution:
      "Built a fast, modern platform with categorized legal data and optimized UX.",
    results: [
      "⚡ 3x faster access to laws",
      "📈 Higher engagement",
      "💼 Better workflow efficiency",
    ],
    link: "https://chamber-frontend-i2lc.vercel.app/",
  },

  "voter-data": {
    title: "Voter Data System",
    category: "Data Intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80",
    problem:
      "Managing and accessing voter data efficiently was complex and time-consuming.",
    strategy:
      "Simplify data access with structured UI and optimized search.",
    execution:
      "Developed a web-based tool for quick lookup and efficient data management.",
    results: [
      "📊 Faster data access",
      "⚡ Improved efficiency",
      "🧠 Better data usability",
    ],
    link: "https://voterlist-webtool.vercel.app/",
  },

  "luxury-resort": {
    title: "Luxury Resort Demo",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f8?w=1800&q=80",
    problem:
      "Luxury resorts require immersive digital experiences to attract premium customers.",
    strategy:
      "Focus on visuals, storytelling, and premium UI design.",
    execution:
      "Created a visually rich website with smooth transitions and high-end aesthetics.",
    results: [
      "✨ Premium brand feel",
      "📸 Strong visual storytelling",
      "💼 High-end presentation",
    ],
    link: "https://pune-luxury-resort.vercel.app/",
  },
};

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) return notFound();

  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">

      {/* HERO */}
      <div className="relative h-[80vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-10 max-w-4xl">
          <p className="text-amber-400 text-xs tracking-widest uppercase">
            {project.category}
          </p>

          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] text-white mt-4">
            {project.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">

        <Section title="The Problem" text={project.problem} />
        <Section title="Our Strategy" text={project.strategy} />
        <Section title="Execution" text={project.execution} />

        {/* RESULTS */}
        <div>
          <h2 className="text-amber-500 text-xs uppercase tracking-widest mb-6">
            Results
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((r, i) => (
              <div
                key={i}
                className="p-6 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur rounded-lg text-center"
              >
                <p className="text-[var(--text)] font-medium">{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LIVE BUTTON */}
        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            className="inline-block bg-amber-500 text-black px-8 py-3 font-semibold hover:bg-amber-400 transition"
          >
            View Live Project →
          </a>
        </div>

      </div>

    </section>
  );
}


/* REUSABLE SECTION */
function Section({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="text-amber-500 text-xs uppercase tracking-widest mb-4">
        {title}
      </h2>
      <p className="text-[var(--muted)] text-lg leading-relaxed">
        {text}
      </p>
    </div>
  );
}