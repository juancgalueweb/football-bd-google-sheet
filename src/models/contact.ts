import { model, models, Schema } from 'mongoose'
import type { Contact } from '../types'

const contactSchema = new Schema<Contact>(
  {
    firstName: {
      type: String,
      required: [true, 'Por favor, ingrese su primer nombre'],
      maxlength: [30, 'El nombre debe tener máximo 30 caracteres']
    },
    lastName: {
      type: String,
      required: [true, 'Por favor, ingrese su apellido'],
      maxlength: [30, 'El apellido debe tener máximo 30 caracteres']
    },
    email: {
      type: String,
      required: [true, 'Por favor, ingrese su correo electrónico'],
      maxlength: [50, 'El correo electrónico debe tener máximo 50 caracteres']
    },
    phoneNumber: {
      type: String,
      required: [true, 'Por favor, ingrese su número de teléfono'],
      maxlength: [15, 'El número de teléfono debe tener máximo 15 caracteres']
    },
    formMessages: {
      type: [String],
      required: [true, 'Por favor, ingrese su mensaje'],
      minlength: [10, 'El mensaje debe tener al menos 10 caracteres'],
      maxlength: [500, 'El mensaje debe tener máximo 500 caracteres']
    }
  },
  { timestamps: true }
)

export default models.Contact ?? model<Contact>('Contact', contactSchema)
