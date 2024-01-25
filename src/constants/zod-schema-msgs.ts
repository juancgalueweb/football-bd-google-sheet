export enum ZodSchemaMsgs {
  FIRST_NAME_REQUIRED = 'El nombre es requerido.',
  FIRST_NAME_INVALID_TYPE = 'El nombre debe ser del tipo string.',
  FIRST_NAME_MIN_LENGTH = 'El nombre debe tener al menos 2 caracteres.',
  FIRST_NAME_MAX_LENGTH = 'El nombre debe tener máximo 30 caracteres.',
  FIRST_NAME_ONLY_LETTERS = 'El nombre debe contener solo letras.',
  LAST_NAME_REQUIRED = 'El apellido es requerido.',
  LAST_NAME_INVALID_TYPE = 'El apellido debe ser del tipo string.',
  LAST_NAME_MIN_LENGTH = 'El apellido debe tener al menos 2 caracteres.',
  LAST_NAME_MAX_LENGTH = 'El apellido debe tener máximo 30 caracteres.',
  LAST_NAME_ONLY_LETTERS = 'El apellido debe contener solo letras.',
  EMAIL_REQUIRED = 'El email es requerido.',
  EMAIL_INVALID_TYPE = 'El email debe ser del tipo string.',
  EMAIL_INVALID_FORMAT = 'El email debe ser válido.',
  EMAIL_MAX_LENGTH = 'El email debe tener máximo 200 caracteres.',
  PHONE_NUMBER_REQUIRED = 'El número de teléfono es requerido.',
  PHONE_NUMBER_INVALID_TYPE = 'El número de teléfono debe ser del tipo string.',
  PHONE_NUMBER_MIN_LENGTH = 'El número de teléfono es requerido.',
  PHONE_NUMBER_MAX_LENGTH = 'El número de teléfono debe tener máximo 15 caracteres.',
  PHONE_NUMBER_WITH_PLUS_SIGN = 'El número de teléfono debe empezar con el signo +, y el resto debe ser solo números.',
  FORM_MESSAGE_REQUIRED = 'El mensaje es requerido.',
  FORM_MESSAGE_INVALID_TYPE = 'El mensaje debe ser del tipo string.',
  FORM_MESSAGE_MIN_LENGTH = 'El mensaje debe tener al menos 10 caracteres.',
  FORM_MESSAGE_MAX_LENGTH = 'El mensaje debe tener máximo 500 caracteres.'
}
