import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { projects, type Project } from "@/data/profile"
import { cn } from "@/lib/utils"

const accents: Record<Project["accent"], string> = {
  teal: "from-teal-500/80 to-cyan-700/90",
  navy: "from-slate-700 to-blue-950",
  violet: "from-indigo-500/80 to-violet-800/90",
  amber: "from-amber-500/80 to-orange-700/90",
}

function Cover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="border-b bg-muted">
        <div className="flex items-center gap-1.5 border-b bg-card px-3 py-2">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-amber-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          {project.href && (
            <span className="ml-2 truncate rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
              {project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          )}
        </div>
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.client} homepage`}
            width={1440}
            height={900}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn(
        "relative flex aspect-video items-end overflow-hidden bg-gradient-to-br p-6 text-white",
        accents[project.accent],
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <div aria-hidden className="absolute top-5 right-5 left-5 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-white/40" />
        <span className="size-2.5 rounded-full bg-white/40" />
        <span className="size-2.5 rounded-full bg-white/40" />
      </div>
      <p className="relative text-sm font-medium tracking-wide uppercase opacity-90">{project.client}</p>
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="A few of the products and organisations I have built for. Client code is private, so each card summarises my part of the work and links to the live site."
      className="bg-muted/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.title}
            className={cn(
              "group gap-0 overflow-hidden py-0 transition-shadow hover:shadow-lg",
              p.featured && "md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr]",
            )}
          >
            <Cover project={p} />
            <CardContent className="flex flex-1 flex-col p-6">
              <p className="text-sm font-medium text-brand">{p.client}</p>
              <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-brand" /> {o}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {p.stack.map((t) => (
                  <Badge key={t} variant="outline" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
                >
                  {p.linkLabel ?? "Visit site"} <ArrowUpRight className="size-4" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
