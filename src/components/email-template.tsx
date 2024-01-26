import type { SendData } from '@/types'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'

export const EmailTemplate: React.FC<Readonly<SendData>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  formMessage,
  pathname
}) => {
  return (
    <Html>
      <Head />
      <Preview>Te han escrito desde tu página web de Boudoir</Preview>

      <Body style={main}>
        <Container style={bodyContainer}>
          <Heading style={heading}>
            Te han escrito desde tu página web de Boudoir
          </Heading>

          <Section style={section}>
            <Row>
              <Text style={textBase}>
                Buenas noticias, alguien ha interactuado con tu web y puede ser
                un potencial cliente.
              </Text>

              <Text style={textBase}>
                Aquí tienes los detalles de la persona que te ha contactado:
              </Text>
            </Row>
          </Section>

          <Section>
            <Row>
              <Text style={textBase}>
                <strong>🙋 Nombre completo:</strong> {firstName} {lastName}
              </Text>
              <Text style={textBase}>
                <strong>📧 Correo electrónico:</strong> {email}
              </Text>
              <Text style={textBase}>
                <strong>☎️ Número de teléfono:</strong> {phoneNumber}
              </Text>
              <Text style={textBase}>
                <strong>💬 Mensaje:</strong> {formMessage}
              </Text>
              <Text style={textBase}>
                <strong>❓ Ruta:</strong> {pathname}
              </Text>
            </Row>
          </Section>

          <Section>
            <Row>
              <Text style={textBase}>
                Te deseo el mayor de los éxitos en tu próximo proyecto
                fotográfico.
              </Text>
            </Row>
          </Section>
        </Container>

        <Container style={footerContainer}>
          <Hr style={hr} />
          <Text style={footer}>
            Hecho con ❤️ por © {new Date().getFullYear()} Juan Galué
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default EmailTemplate

const main = {
  backgroundColor: '#fafbfb',
  fontFamily:
    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: '1rem',
  lineHeight: '1.5rem'
}

const bodyContainer = {
  backgroundColor: 'rgb(255 255 255)',
  padding: '1rem'
}

const heading = {
  textAlign: 'center' as const,
  marginTop: '0px',
  marginBottom: '0px',
  lineHeight: '2rem'
}

const textBase = {
  fontSize: '1rem',
  lineHeight: '1.5rem'
}

const section = {
  marginTop: '1rem',
  marginBottom: '1rem'
}

const footerContainer = {
  marginTop: '1rem'
}

const hr = {
  backgroundColor: '#cccccc'
}

const footer = {
  textAlign: 'center' as const,
  color: '#718096',
  marginBottom: '4.5rem',
  fontSize: '0.75rem',
  fontWeight: 300
}
