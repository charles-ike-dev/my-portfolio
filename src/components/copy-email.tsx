"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-white/25 bg-transparent text-inherit hover:bg-white/10 hover:text-inherit dark:border-black/20 dark:hover:bg-black/5"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch {}
      }}
    >
      {copied ? <Check /> : <Copy />} {copied ? "Copied" : "Copy email"}
    </Button>
  )
}
