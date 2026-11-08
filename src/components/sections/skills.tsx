import { Section } from "@/components/section"
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
            <h3 className="mb-4 font-semibold">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
