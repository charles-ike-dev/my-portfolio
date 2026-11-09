"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"
import { viewsBaseline } from "@/data/profile"

const SESSION_KEY = "portfolio:viewed"

// Counts one view per browser session, then shows baseline + stored total.
// If the counter API is not configured or unreachable, it shows the baseline.
export function ViewCounter() {
  const [views, setViews] = useState<number | undefined>(undefined)

  useEffect(() => {
    let counted = false
    try {
      counted = sessionStorage.getItem(SESSION_KEY) === "1"
    } catch {}
    fetch("/api/views", { method: counted ? "GET" : "POST", cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { views: null }))
      .then((d: { views: number | null }) => {
        setViews(viewsBaseline + (typeof d.views === "number" ? d.views : 0))
        if (!counted && typeof d.views === "number") {
          try {
            sessionStorage.setItem(SESSION_KEY, "1")
          } catch {}
        }
      })
      .catch(() => setViews(viewsBaseline))
  }, [])

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground shadow-xs"
      aria-live="polite"
    >
      <Eye className="size-4 text-brand" />
      {views === undefined ? (
        <span className="h-4 w-20 animate-pulse rounded bg-muted" aria-label="Loading view count" />
      ) : (
        <span>
          <span className="font-semibold text-foreground tabular-nums">{views.toLocaleString("en-GB")}</span>{" "}
          website {views === 1 ? "view" : "views"}
        </span>
      )}
    </div>
  )
}
