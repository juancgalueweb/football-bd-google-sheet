import dbConnect from '@/lib/dbConnect'
import Contact from '@/models/contact'
import { NextResponse } from 'next/server'

export async function POST(req: NextResponse) {
  await dbConnect()

  const data = await req.json()

  try {
    const contact = await Contact.create(data)

    return NextResponse.json({ success: true, data: contact }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
