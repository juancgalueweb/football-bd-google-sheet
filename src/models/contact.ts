import { model, models, Schema } from 'mongoose'
import type { Contact } from '../types'

const contactSchema = new Schema<Contact>(
  {
    firstName: {
      type: String,
      required: [true, 'Por favor, ingrese su primer nombre'],
      maxlength: 30
    },
    lastName: {
      type: String,
      required: [true, 'Por favor, ingrese su apellido'],
      maxlength: 30
    },
    email: {
      type: String,
      required: [true, 'Por favor, ingrese su correo electrónico'],
      maxlength: 50
    },
    phoneNumber: {
      type: String,
      required: [true, 'Por favor, ingrese su número de teléfono'],
      maxlength: 12
    }
  },
  { timestamps: true }
)

export default models.Contact ?? model<Contact>('Contact', contactSchema)
