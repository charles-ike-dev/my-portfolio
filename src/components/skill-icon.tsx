import type { LucideIcon } from "lucide-react"
import { Cloud, Coffee, Database, Hash, Network, Sparkles, TreePine, Waypoints } from "lucide-react"
import {
  siAnthropic, siContentful, siCplusplus, siDocker, siDotnet, siDrizzle, siExpo, siExpress, siFastapi,
  siFirebase, siFlutter, siGooglecloud, siGraphql, siHubspot, siJavascript, siLangchain, siMongodb,
  siMysql, siN8n, siNestjs, siNextdotjs, siNodedotjs, siPhp, siPinia, siPostgresql, siPrisma, siPython,
  siReact, siReactivex, siReactquery, siRedux, siSanity, siShadcnui, siShopify, siStrapi, siStripe,
  siSupabase, siTailwindcss, siTypescript, siVuedotjs, siWoocommerce, siWordpress, siZapier,
  type SimpleIcon,
} from "simple-icons"
import { cn } from "@/lib/utils"

// Brand logos come from Simple Icons (simpleicons.org). Brands that Simple Icons
// does not include (Java, C#, OpenAI, LlamaIndex, Pinecone, AWS) use neutral icons.
const brand: Record<string, SimpleIcon> = {
  TypeScript: siTypescript, JavaScript: siJavascript, Python: siPython, PHP: siPhp, "C++": siCplusplus,
  React: siReact, "Next.js": siNextdotjs, "Vue.js": siVuedotjs, "Tailwind CSS": siTailwindcss, "shadcn/ui": siShadcnui,
  Redux: siRedux, Pinia: siPinia, RxJS: siReactivex, "React Query": siReactquery,
  "Node.js": siNodedotjs, Express: siExpress, NestJS: siNestjs, FastAPI: siFastapi, "ASP.NET": siDotnet, GraphQL: siGraphql,
  "React Native": siReact, Expo: siExpo, Flutter: siFlutter,
  PostgreSQL: siPostgresql, MySQL: siMysql, MongoDB: siMongodb, Supabase: siSupabase, Prisma: siPrisma, "Drizzle ORM": siDrizzle,
  "Anthropic API": siAnthropic, LangChain: siLangchain,
  "Google Cloud": siGooglecloud, Firebase: siFirebase, Docker: siDocker,
  Shopify: siShopify, WooCommerce: siWoocommerce, Stripe: siStripe,
  WordPress: siWordpress, Sanity: siSanity, Contentful: siContentful, Strapi: siStrapi,
  n8n: siN8n, Zapier: siZapier, HubSpot: siHubspot,
}

const generic: Record<string, LucideIcon> = {
  Java: Coffee, "C#": Hash, REST: Network, "OpenAI API": Sparkles, LlamaIndex: Waypoints,
  Pinecone: TreePine, "Vector DBs": Database, AWS: Cloud,
}

// Very dark logos (black wordmarks) would vanish in dark mode, so they follow the text colour.
function isDark(hex: string) {
  const n = parseInt(hex, 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70
}

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const icon = brand[name]
  if (icon) {
    return (
      <svg
        role="img"
        aria-hidden
        viewBox="0 0 24 24"
        className={cn("size-4 shrink-0", className)}
        fill={isDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    )
  }
  const Icon = generic[name] ?? Sparkles
  return <Icon aria-hidden className={cn("size-4 shrink-0 text-muted-foreground", className)} />
}
