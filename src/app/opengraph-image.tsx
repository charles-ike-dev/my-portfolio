import { ImageResponse } from "next/og"
import { profile } from "@/data/profile"

export const alt = `${profile.name} · ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0f1d3a 0%, #14264a 55%, #0f4c4a 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              background: "#ffffff",
              color: "#14264a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 26, opacity: 0.8 }}>{profile.availability}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 48, color: "#5fd4c4", marginTop: 8 }}>{profile.title}</div>
          <div style={{ fontSize: 30, opacity: 0.8, marginTop: 16 }}>{profile.headline}</div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.7 }}>{`${profile.location} · Remote worldwide`}</div>
      </div>
    ),
    size,
  )
}
