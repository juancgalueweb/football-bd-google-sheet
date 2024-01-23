import dbConnect from '@/lib/dbConnect'
import { mongooseValidationErrorHandler } from '@/lib/mongoose-error-handler'
import Contact from '@/models/contact'
import { type Contact as ContactI } from '@/types'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  await dbConnect()

  const data: ContactI = await req.json()
  const { email, firstName, lastName, phoneNumber } = data

  try {
    const contact = await Contact.findOne({ email })

    if (contact === null) {
      const newContact = await Contact.create(data)
      return NextResponse.json(
        { success: true, data: newContact },
        { status: 201, statusText: 'Contacto creado' }
      )
    }

    const updatedContact = await Contact.findOneAndUpdate(
      { email },
      { firstName, lastName, phoneNumber },
      { new: true, runValidators: true }
    )
    return NextResponse.json(
      { success: true, data: updatedContact },
      { status: 200, statusText: 'Contacto actualizado' }
    )
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        {
          success: false,
          message: mongooseValidationErrorHandler(error)
        },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    )
  }
}
