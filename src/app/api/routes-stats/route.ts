import { RoutesStatsMsgs } from '@/constants/routes-msgs'
import dbConnect from '@/lib/db-connect'
import RoutesStats from '@/models/routes-stats'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  await dbConnect()

  const routhPath = await req.json()
  const { pathname } = routhPath

  try {
    await RoutesStats.findOneAndUpdate(
      {},
      { $inc: { [`routesStats.${pathname}`]: 1 } },
      { upsert: true, new: true }
    )

    return NextResponse.json(
      {
        success: true,
        message: RoutesStatsMsgs.SUCCESS
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: RoutesStatsMsgs.ERROR
      },
      { status: 500 }
    )
  }
}
