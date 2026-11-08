import { ArrowUpRight, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { earlierRoles, education, experience, type Job } from "@/data/profile"

function CompanyLine({ job }: { job: Job }) {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
      {job.companyUrl ? (
        <a
          href={job.companyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
        >
          {job.company}
          <ArrowUpRight className="size-3.5" />
        </a>
      ) : (
        <span className="font-medium text-foreground">{job.company}</span>
      )}
      {job.location && (
        <>
          <span aria-hidden>·</span>
          <span>{job.location}</span>
        </>
      )}
    </div>
  )
}

function JobItem({ job, compact = false }: { job: Job; compact?: boolean }) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      <span aria-hidden className="absolute top-2 bottom-0 left-[5px] w-px bg-border group-last:hidden" />
      <span
        aria-hidden
        className="absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-brand bg-background"
      />
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <h3 className={compact ? "font-semibold" : "text-lg font-semibold"}>
          {job.role}
          {job.tag && (
            <Badge variant="secondary" className="ml-2 align-middle">
              {job.tag}
            </Badge>
          )}
        </h3>
        <span className="text-sm font-medium whitespace-nowrap text-muted-foreground tabular-nums">
          {job.dates}
        </span>
      </div>
      <CompanyLine job={job} />
      <ul className="mt-3 space-y-1.5 text-foreground/80">
        {job.bullets.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-brand" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {job.stack && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.stack.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
      )}
    </li>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Six years shipping software for healthcare, analytics and logistics"
      className="bg-muted/40"
    >
      <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
        <ol>
          {experience.map((job) => (
            <JobItem key={job.company + job.dates} job={job} />
          ))}
        </ol>
        <aside className="space-y-10">
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Earlier roles &amp; leadership
            </h3>
            <ol>
              {earlierRoles.map((job) => (
                <JobItem key={job.role} job={job} compact />
              ))}
            </ol>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="text-sm text-muted-foreground">{education.school}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{education.dates}</p>
          </div>
        </aside>
      </div>
    </Section>
  )
}
