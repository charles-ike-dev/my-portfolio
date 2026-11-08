import { cn } from "@/lib/utils"

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
            <span className="h-px w-8 bg-brand" />
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground text-pretty">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
