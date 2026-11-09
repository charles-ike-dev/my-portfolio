import { connection, NextResponse } from "next/server"
import { Redis } from "@upstash/redis"

// Total site views, stored in Upstash Redis (free tier is plenty).
// Set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN, or the KV_REST_API_URL +
// KV_REST_API_TOKEN pair that Vercel's Upstash integration adds automatically.
const KEY = "portfolio:views"

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
  return url && token ? new Redis({ url, token }) : null
}

const noStore = { "Cache-Control": "no-store" }

export async function GET() {
  await connection()
  const redis = getRedis()
  if (!redis) return NextResponse.json({ views: null }, { status: 503, headers: noStore })
  try {
    const views = Number((await redis.get<number>(KEY)) ?? 0)
    return NextResponse.json({ views }, { headers: noStore })
  } catch {
    return NextResponse.json({ views: null }, { status: 502, headers: noStore })
  }
}

export async function POST() {
  await connection()
  const redis = getRedis()
  if (!redis) return NextResponse.json({ views: null }, { status: 503, headers: noStore })
  try {
    const views = await redis.incr(KEY)
    return NextResponse.json({ views }, { headers: noStore })
  } catch {
    return NextResponse.json({ views: null }, { status: 502, headers: noStore })
  }
}
