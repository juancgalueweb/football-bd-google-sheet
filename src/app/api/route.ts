import dbConnect from '@/lib/dbConnect'
import { mongooseValidationErrorHandler } from '@/lib/mongoose-error-handler'
import Contact from '@/models/contact'
import { type FormData } from '@/types'
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  await dbConnect()

  const data: FormData = await req.json()
  const { email, firstName, lastName, phoneNumber, formMessage } = data

  try {
    const contact = await Contact.findOne({ email })

    if (contact === null) {
      const newContact = await Contact.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        formMessages: [formMessage]
      })
      return NextResponse.json(
        {
          success: true,
          data: newContact,
          message: 'Gracias por su interés, le contactaramos en breve'
        },
        { status: 201, statusText: 'Contacto creado' }
      )
    }

    const updatedContact = await Contact.findOneAndUpdate(
      { email },
      {
        $set: { firstName, lastName, phoneNumber },
        $push: { formMessages: formMessage }
      },
      { new: true, runValidators: true }
    )
    return NextResponse.json(
      {
        success: true,
        data: updatedContact,
        message: 'Que bueno verte de vuelta, le contactaremos en breve'
      },
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
