import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const json = await req.json()
  console.log(json.username)
  return NextResponse.json({})
}
