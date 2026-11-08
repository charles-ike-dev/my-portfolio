import { ArrowUpRight, Briefcase, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyEmail } from "@/components/copy-email"
import { Section } from "@/components/section"
import { profile } from "@/data/profile"

export function Contact() {
  const links = [
    { label: "Upwork", href: profile.links.upwork, icon: Briefcase },
    { label: "GitHub", href: profile.links.github, icon: ArrowUpRight },
    { label: "LinkedIn", href: profile.links.linkedin, icon: ArrowUpRight },
  ].filter((l) => l.href)

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand/30 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="max-w-xl text-lg opacity-85">
              Whether you are hiring for a full-time role, need a contractor for a project, or want a second pair
              of eyes on an AI feature that isn&apos;t behaving, I&apos;d love to hear about it. I usually reply
              within a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href={`mailto:${profile.email}?subject=Hello%20Charles`}>
                  <Mail /> Email me
                </a>
              </Button>
              <CopyEmail email={profile.email} />
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="size-4 opacity-70" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 opacity-70" />
              <span>
                {profile.location} <span className="opacity-70">· {profile.locationNote}</span>
              </span>
            </li>
            {links.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <l.icon className="size-4 opacity-70" />
                <a href={l.href} target="_blank" rel="noreferrer" className="hover:underline">
                  {l.label} profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
