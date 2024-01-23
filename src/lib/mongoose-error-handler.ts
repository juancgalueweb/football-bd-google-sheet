export const mongooseValidationErrorHandler = (err: any): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const errors = Object.values(err.errors).map((val: any) => val.message)
  const erorsMsgs = errors.join('. ')
  const msg = `Datos inválidos: ${erorsMsgs}`
  return msg
}
