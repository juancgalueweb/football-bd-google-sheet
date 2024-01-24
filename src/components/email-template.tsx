import type { FormData } from '@/types'

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  formMessage
}) => {
  return (
    <div>
      <div>
        <h1>Nuevo formulario recibido</h1>
        <p>Hola Juan Pablo,</p>
        <p>
          <strong>{firstName}</strong> <strong>{lastName}</strong> ha
          interactuado con tu web y puede ser un potencial cliente. Te dejo sus
          datos para que te pongas en contacto tan pronto tengas el tiempo:
        </p>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Número de teléfono:</strong> {phoneNumber}
        </div>
        <div>
          <strong>Mensaje:</strong> {formMessage}
        </div>
        <p>
          Te deseo el mayor de los éxitos en tu próximo proyecto fotográfico.
        </p>
        <div>
          <p>
            Email transaccional enviado por © {new Date().getFullYear()} Juan
            Galué
          </p>
        </div>
      </div>
    </div>
  )
}
