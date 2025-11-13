import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <div className="min-h-screen bg-brand-blue text-brand-cream font-garamond flex flex-col">
      <header className="border-b border-brand-cream/15 bg-brand-blue/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-90 transition">
            <span className="p-1 rounded-2xl bg-gradient-to-br from-brand-cream/15 via-transparent to-brand-cream/5">
              <img
                src="/logo_dark_blue.png"
                alt="Amphitheater logo"
                className="h-12 w-12 rounded-xl object-cover ring-1 ring-brand-cream/20 shadow-lg"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight lowercase hidden sm:inline">
              amphitheater
            </span>
          </Link>

          <Link
            to="/"
            className="text-sm font-medium tracking-wide uppercase border border-brand-cream/20 px-4 py-2 rounded-full hover:border-brand-cream/60 transition"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-cream/70">
            Our Mission
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Where creativity meets connection.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-brand-cream/85">
            <p>
              This is a placeholder for your mission statement. Introduce the
              core belief that drives Amphitheater, spotlight the community you
              serve, and set the tone for the story you want visitors to feel as
              soon as they land here.
            </p>
            <p>
              Use the space below to expand on your purpose—share the challenge
              you’re solving for creatives, the culture you’re building, and how
              Amphitheater helps ideas come alive through collaboration.
            </p>
            <p>
              Feel free to replace these paragraphs with your own copy at any
              time. The layout will grow or shrink with the amount of text you
              add, while staying true to the landing page’s typography and color
              system.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-cream/15 bg-brand-black/70">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-cream/70 text-sm">
          <div>© {new Date().getFullYear()} Amphitheater. All rights reserved.</div>
          <Link to="/" className="hover:text-brand-cream transition">
            Return to landing
          </Link>
        </div>
      </footer>
    </div>
  );
}

