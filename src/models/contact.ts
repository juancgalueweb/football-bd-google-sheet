import { ModelMsgs } from '@/constants/model-msgs'
import { model, models, Schema } from 'mongoose'
import type { Contact } from '../types'

const contactSchema = new Schema<Contact>(
  {
    firstName: {
      type: String,
      required: [true, ModelMsgs.FIRST_NAME_REQUIRED],
      maxlength: [30, ModelMsgs.FIRST_NAME_MAX_LENGTH]
    },
    lastName: {
      type: String,
      required: [true, ModelMsgs.LAST_NAME_REQUIRED],
      maxlength: [30, ModelMsgs.LAST_NAME_MAX_LENGTH]
    },
    email: {
      type: String,
      required: [true, ModelMsgs.EMAIL_REQUIRED],
      maxlength: [200, ModelMsgs.EMAIL_MAX_LENGTH]
    },
    phoneNumber: {
      type: String,
      required: [true, ModelMsgs.PHONE_NUMBER_REQUIRED],
      maxlength: [15, ModelMsgs.PHONE_NUMBER_MAX_LENGTH]
    },
    formMessages: {
      type: [String],
      required: [true, ModelMsgs.FORM_MESSAGES_REQUIRED],
      minlength: [10, ModelMsgs.FORM_MESSAGES_MIN_LENGTH],
      maxlength: [500, ModelMsgs.FORM_MESSAGES_MAX_LENGTH]
    }
  },
  { timestamps: true }
)

export default models.Contact ?? model<Contact>('Contact', contactSchema)
