import { type FormData } from '@/types'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

export const EmailTemplateTest = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  formMessage
}: FormData) => {
  return (
    <Html>
      <Head />
      <Preview>Te han escrito desde tu página web de Boudoir</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb'
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px'
              }
            }
          }
        }}
      >
        <Body className='bg-offwhite text-base font-sans'>
          <Container className='bg-white p-45'>
            <Heading className='text-center my-0 leading-8'>
              Te han escrito desde tu página web de Boudoir
            </Heading>

            <Section className='my-4'>
              <Row>
                <Text className='text-base'>
                  Buenas noticias, alguien ha interactuado con tu web y puede
                  ser un potencial cliente.
                </Text>

                <Text className='text-base'>
                  Aquí tienes los detalles de la persona que te ha contactado:
                </Text>
              </Row>
            </Section>

            <ul>
              <li className='mb-20' key={3}>
                <strong>Nombre completo:</strong> {firstName} {lastName}
              </li>
              <li className='mb-20' key={4}>
                <strong>Correo electrónico:</strong> {email}
              </li>
              <li className='mb-20' key={5}>
                <strong>Número de teléfono:</strong> {phoneNumber}
              </li>
              <li className='mb-20' key={6}>
                <strong>Mensaje:</strong> {formMessage}
              </li>
            </ul>

            <Section>
              <Row>
                <Text className='text-base'>
                  Te deseo el mayor de los éxitos en tu próximo proyecto
                  fotográfico.
                </Text>
              </Row>
            </Section>
          </Container>

          <Container className='mt-20'>
            <Text className='text-center text-gray-400 mb-45'>
              Hecho con ❤️ por © {new Date().getFullYear()} Juan Galué
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplateTest
