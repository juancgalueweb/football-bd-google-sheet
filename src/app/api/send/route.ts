import { EmailTemplate } from '@/components/email-template'
import { EMAIL_TO, ResendMsgs } from '@/constants/send-msgs'
import type { SendData } from '@/types'
import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const form: SendData = await req.json()

  const { email, firstName, lastName, phoneNumber, formMessage, pathname } =
    form

  try {
    await resend.emails.send({
      from: ResendMsgs.EMAIL_FROM,
      to: EMAIL_TO,
      subject: ResendMsgs.EMAIL_SUBJECT,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        formMessage,
        pathname
      }) as React.ReactElement
    })

    return NextResponse.json(
      {
        success: true,
        message: ResendMsgs.SUCCESS
      },
      { status: 200, statusText: ResendMsgs.OK_STATUS_TEXT }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: ResendMsgs.ERROR, error },
      { status: 500 }
    )
  }
}
