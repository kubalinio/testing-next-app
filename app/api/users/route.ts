import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      username: 'szymon',
    },
    {
      id: 2,
      username: 'krzych',
    },
    {
      id: 3,
      username: 'wiola',
    },
  ])
}
