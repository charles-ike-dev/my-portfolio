import { Check, Monitor, ShoppingCart, Smartphone, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { industries, profile, services, workingStyle } from "@/data/profile"

const icons = { monitor: Monitor, smartphone: Smartphone, cart: ShoppingCart, sparkles: Sparkles }

export function Overview() {
  return (
    <Section id="overview" eyebrow="Overview" title="Turning ideas into dependable software">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          {profile.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="pt-4">
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Industries
            </h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <span key={i} className="rounded-full border bg-card px-3 py-1 text-sm">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Card className="gap-0 bg-primary py-0 text-primary-foreground">
          <CardContent className="p-7">
            <h3 className="mb-5 text-lg font-semibold">How I work</h3>
            <ul className="space-y-3">
              {workingStyle.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="opacity-90">{w}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <h3 className="mt-20 mb-6 text-2xl font-bold tracking-tight">How I can help</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = icons[s.icon]
          return (
            <Card key={s.title} className="group gap-0 py-0 transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 grid size-11 place-items-center rounded-lg bg-accent text-accent-foreground transition-transform group-hover:-translate-y-0.5">
                  <Icon className="size-5" />
                </div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
