import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/data/profile"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const description = `${profile.name}, ${profile.title} in London. ${profile.headline}. ${profile.availability}.`

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} · ${profile.title}`,
  description,
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description,
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
