import { Section } from "@/components/section"
import { SkillIcon } from "@/components/skill-icon"
import { skills } from "@/data/profile"

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech stack"
      intro="End-to-end, from the database to the interface, with AI built in where it adds real value."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 flex items-center justify-between font-semibold">
              {g.group}
              <span className="text-xs font-medium text-muted-foreground tabular-nums">{g.items.length}</span>
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center gap-1.5 rounded-md border bg-secondary/60 px-2.5 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:border-brand/50 hover:bg-accent"
                >
                  <SkillIcon name={s} className="size-3.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
