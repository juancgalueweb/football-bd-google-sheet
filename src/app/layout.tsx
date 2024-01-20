import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Futbol app de Goncy',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'm-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 antialiased',
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className='flex items-center justify-between container'>
            <Link className='text-xl font-bold leading-[4rem]' href='/'>
              Fútbol app de Goncy
            </Link>
            <nav>
              <ul className='flex items-center gap-4 opacity-70'>
                <li>
                  <Link href='/'>Partidos</Link>
                </li>
                <li>
                  <Link href='/players'>Jugadores</Link>
                </li>
                {/* <li>
                  <Link href='/armador'>Armador de equipos</Link>
                </li> */}
                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>
          </header>
          <main className='py-8'>{children}</main>
          <footer className='text-center leading-[4rem] opacity-70'>
            © {new Date().getFullYear()} Juan Galué
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
