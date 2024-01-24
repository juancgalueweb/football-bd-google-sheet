import { EmailTemplate } from '@/components/email-template'
import type { FormData } from '@/types'
import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const form: FormData = await req.json()
  const { email, firstName, lastName, phoneNumber, formMessage } = form

  try {
    await resend.emails.send({
      from: 'Juan Galue Emails <form-to-puche@juancgalue-web.cl>',
      to: ['juancgalue@icloud.com', 'juanpucheboudoir@gmail.com'],
      subject: 'Nuevo mensaje desde el formulario de contacto',
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        formMessage
      }) as React.ReactElement
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Formulario enviado correctamente al e-mail de Juan Puche'
      },
      { status: 200, statusText: 'Formulario de contacto enviado al e-mail' }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    )
  }
}
