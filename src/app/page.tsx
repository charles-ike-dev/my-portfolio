import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Overview } from "@/components/sections/overview"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { profile } from "@/data/profile"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, React, Tailwind CSS &amp; shadcn/ui.</p>
        </div>
      </footer>
    </>
  )
}
