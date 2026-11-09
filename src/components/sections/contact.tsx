import { ArrowUpRight, Briefcase, Check, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyEmail } from "@/components/copy-email"
import { Section } from "@/components/section"
import { contactVisibility, profile, services } from "@/data/profile"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function Contact() {
  const showEmail = contactVisibility.email && Boolean(profile.email)
  const showLinkedin = contactVisibility.linkedin && Boolean(profile.links.linkedin)

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand/30 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <p className="max-w-xl text-lg opacity-85">
              Whether you are hiring for a full-time role, need a contractor for a project, or want a second pair
              of eyes on an AI feature that isn&apos;t behaving, I&apos;d love to hear about it. The quickest way to
              reach me is through my Upwork profile, where you can see my work history and send me a message.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href={profile.links.upwork} target="_blank" rel="noreferrer">
                  <Briefcase /> Message me on Upwork <ArrowUpRight />
                </a>
              </Button>
              {showEmail && <CopyEmail email={profile.email} />}
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm dark:border-black/10 dark:bg-black/[0.04]">
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase opacity-60">Open to</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {["Full-time", "Contract", "Freelance"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand/20 px-3 py-1 text-sm font-medium ring-1 ring-brand/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide uppercase opacity-60">I can help with</p>
              <ul className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.title} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-brand" strokeWidth={3} />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-white/15 pt-5 dark:border-black/10">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0 opacity-70" />
                  <span>
                    {profile.location} <span className="opacity-70">· {profile.locationNote}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="size-4 shrink-0 opacity-70" />
                  <a href={profile.links.upwork} target="_blank" rel="noreferrer" className="hover:underline">
                    Upwork profile
                  </a>
                </li>
                {showLinkedin && (
                  <li className="flex items-center gap-3">
                    <LinkedinIcon className="size-4 shrink-0 opacity-70" />
                    <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                      LinkedIn profile
                    </a>
                  </li>
                )}
                {showEmail && (
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 shrink-0 opacity-70" />
                    <a href={`mailto:${profile.email}`} className="hover:underline">
                      {profile.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
