import { ArrowRight, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile, stats } from "@/data/profile"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_80%_-10%,color-mix(in_oklch,var(--brand)_22%,transparent),transparent),radial-gradient(40rem_25rem_at_0%_10%,color-mix(in_oklch,var(--primary)_10%,transparent),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
        <div className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground shadow-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {profile.availability}
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-brand sm:text-3xl">
          {profile.title}
        </p>
        <p className="mt-2 text-lg font-medium text-muted-foreground">{profile.headline}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
            <a href="#contact">
              Start a project <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/Charles-Ike-Full-Stack-Developer-CV.pdf" download>
              <Download /> Download CV
            </a>
          </Button>
          <span className="ml-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {profile.location}
          </span>
        </div>
        </div>
        <CodeCard />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-5 sm:p-6">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function CodeCard() {
  const lines: [string, string][] = [
    ["role", '"Full-Stack Developer"'],
    ["based", '"London, UK · Remote"'],
    ["stack", '["Next.js", "Node", "Python"]'],
    ["ai", '["RAG", "LangChain", "Pinecone"]'],
    ["sectors", '["Health", "Data", "Logistics"]'],
    ["openTo", '["full-time", "contract", "freelance"]'],
  ]
  return (
    <div className="hidden overflow-hidden rounded-xl border bg-card/80 font-mono text-[13px] shadow-xl backdrop-blur lg:block">
      <div className="flex items-center gap-1.5 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-amber-400/80" />
        <span className="size-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-muted-foreground">charles.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 leading-7">
        <span className="text-violet-600 dark:text-violet-400">const</span> charles = {"{"}
        {"\n"}
        {lines.map(([k, v]) => (
          <span key={k}>
            {"  "}
            <span className="text-brand">{k}</span>: <span className="text-amber-700 dark:text-amber-300">{v}</span>,
            {"\n"}
          </span>
        ))}
        {"}"}
      </pre>
    </div>
  )
}
