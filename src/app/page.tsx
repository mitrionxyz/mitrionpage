import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const pillars = [
  {
    label: "The Kernel",
    description: "Safety and execution infrastructure for autonomous capital",
  },
  {
    label: "Lighter Native",
    description: "Deep integration for high-performance orderbook trading",
  },
  {
    label: "Agent Engine",
    description: "Create, backtest, and deploy autonomous strategies",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-substrate-grid">
      {/* Subtle catalyst glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, rgba(226,123,88,1) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          {/* Logo mark */}
          <div className="mb-10 flex justify-center animate-fade-in-up">
            <Image
              src="/brand/logo-icon.svg"
              alt="MITRION"
              width={120}
              height={120}
              priority
            />
          </div>

          {/* Brand name */}
          <h1 className="mb-4 font-[var(--font-institution)] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up animate-delay-100">
            MITRION
          </h1>

          {/* Tagline */}
          <p className="mb-3 font-[var(--font-institution)] text-lg tracking-wide text-foreground sm:text-xl animate-fade-in-up animate-delay-200">
            The operating system for onchain agents
          </p>
          <p className="mb-12 text-sm tracking-wide text-muted-foreground animate-fade-in-up animate-delay-300">
            Create, test, deploy and invest
          </p>

          {/* Glowing catalyst divider */}
          <div className="mx-auto mb-12 flex justify-center animate-fade-in-up animate-delay-400">
            <div className="h-px w-24 bg-catalyst/50 animate-glow-line" />
          </div>

          {/* Pillars */}
          <div className="mb-16 grid gap-8 sm:grid-cols-3 animate-fade-in-up animate-delay-600">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="text-center">
                <p className="mb-1.5 font-[var(--font-institution)] text-sm font-semibold uppercase tracking-widest text-catalyst">
                  {pillar.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Status badge */}
          <div className="mb-8 animate-fade-in-up animate-delay-800">
            <div className="inline-flex items-center gap-2 border border-catalyst/15 bg-surface/50 px-5 py-2.5 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-catalyst animate-breathe" />
              Building in Public
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 animate-fade-in-up animate-delay-1000">
            <a
              href="https://x.com/Mitrionxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/60 bg-surface/30 px-4 py-2 text-xs text-muted-foreground transition-all duration-200 hover:border-catalyst/30 hover:text-foreground backdrop-blur-sm"
            >
              𝕏
              <ArrowUpRight className="h-3 w-3 opacity-40" />
            </a>
            <a
              href="https://github.com/mitrionxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/60 bg-surface/30 px-4 py-2 text-xs text-muted-foreground transition-all duration-200 hover:border-catalyst/30 hover:text-foreground backdrop-blur-sm"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
