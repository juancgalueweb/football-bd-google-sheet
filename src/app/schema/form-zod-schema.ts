import { ZodSchemaMsgs } from '@/constants/zod-schema-msgs'
import * as z from 'zod'

export const FormSchema = z.object({
  firstName: z
    .string({
      required_error: ZodSchemaMsgs.FIRST_NAME_REQUIRED,
      invalid_type_error: ZodSchemaMsgs.FIRST_NAME_INVALID_TYPE
    })
    .min(2, { message: ZodSchemaMsgs.FIRST_NAME_MIN_LENGTH })
    .max(30, { message: ZodSchemaMsgs.FIRST_NAME_MAX_LENGTH })
    .regex(/^[^0-9]*$/, { message: ZodSchemaMsgs.FIRST_NAME_ONLY_LETTERS }),
  lastName: z
    .string({
      required_error: ZodSchemaMsgs.LAST_NAME_REQUIRED,
      invalid_type_error: ZodSchemaMsgs.LAST_NAME_INVALID_TYPE
    })
    .min(2, { message: ZodSchemaMsgs.LAST_NAME_MIN_LENGTH })
    .max(30, { message: ZodSchemaMsgs.LAST_NAME_MAX_LENGTH })
    .regex(/^[^0-9]*$/, { message: ZodSchemaMsgs.LAST_NAME_ONLY_LETTERS }),
  email: z
    .string({
      required_error: ZodSchemaMsgs.EMAIL_REQUIRED,
      invalid_type_error: ZodSchemaMsgs.EMAIL_INVALID_TYPE
    })
    .email({ message: ZodSchemaMsgs.EMAIL_INVALID_FORMAT })
    .max(200, { message: ZodSchemaMsgs.EMAIL_MAX_LENGTH })
    .trim()
    .toLowerCase(),
  phoneNumber: z
    .string({
      required_error: ZodSchemaMsgs.PHONE_NUMBER_REQUIRED,
      invalid_type_error: ZodSchemaMsgs.PHONE_NUMBER_INVALID_TYPE
    })
    .min(1, { message: ZodSchemaMsgs.PHONE_NUMBER_MIN_LENGTH })
    .max(15, { message: ZodSchemaMsgs.PHONE_NUMBER_MAX_LENGTH })
    .regex(/^\+\d+$/, { message: ZodSchemaMsgs.PHONE_NUMBER_WITH_PLUS_SIGN }),
  formMessage: z
    .string({
      required_error: ZodSchemaMsgs.FORM_MESSAGE_REQUIRED,
      invalid_type_error: ZodSchemaMsgs.FORM_MESSAGE_INVALID_TYPE
    })
    .min(10, { message: ZodSchemaMsgs.FORM_MESSAGE_MIN_LENGTH })
    .max(500, { message: ZodSchemaMsgs.FORM_MESSAGE_MAX_LENGTH })
})
