import * as z from 'zod'

export const FormSchema = z.object({
  firstName: z
    .string({
      required_error: 'El nombre es requerido.',
      invalid_type_error: 'El nombre debe ser del tipo string.'
    })
    .min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.'
    })
    .max(30, { message: 'El nombre debe tener máximo 30 caracteres.' })
    .regex(/^[^0-9]*$/, { message: 'El nombre debe contener solo letras.' }),
  lastName: z
    .string({
      required_error: 'El apellido es requerido.',
      invalid_type_error: 'El apellido debe ser del tipo string.'
    })
    .min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.'
    })
    .max(30, { message: 'El apellido debe tener máximo 30 caracteres.' })
    .regex(/^[^0-9]*$/, { message: 'El apellido debe contener solo letras.' }),
  email: z
    .string({
      required_error: 'El email es requerido.',
      invalid_type_error: 'El email debe ser del tipo string.'
    })
    .email({ message: 'El email debe ser válido.' })
    .max(50, { message: 'El email debe tener máximo 50 caracteres.' })
    .trim()
    .toLowerCase(),
  phoneNumber: z
    .string({
      required_error: 'El número de teléfono es requerido',
      invalid_type_error: 'El número de teléfono debe ser del tipo string.'
    })
    .min(1, { message: 'El número de teléfono es requerido.' })
    .max(15, {
      message: 'El número de teléfono debe tener máximo 15 caracteres.'
    })
    .regex(/^\+\d+$/, {
      message:
        'El número de teléfono debe empezar con el signo +, y el resto debe ser solo números.'
    }),
  formMessage: z
    .string({
      required_error: 'El mensaje es requerido.',
      invalid_type_error: 'El mensaje debe ser del tipo string.'
    })
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' })
    .max(500, { message: 'El mensaje debe tener máximo 500 caracteres.' })
})
