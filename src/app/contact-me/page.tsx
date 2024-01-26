'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useContactForm from '@/hooks/use-contact-form'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function ContactMe() {
  const pathname = usePathname()
  const { form, onSubmit } = useContactForm({ pathname })
  const [characterCount, setCharacterCount] = useState(0)

  return (
    <div className='m-auto w-[600px]'>
      <h1 className='h1 text-center text-xl m-4 font-black'>
        Formulario de contacto
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    id='firstName'
                    placeholder='John'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    id='lastName'
                    placeholder='Wick'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    id='email'
                    placeholder='john_wick@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de teléfono</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    id='phoneNumber'
                    placeholder='+54 1234 5678  '
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Por favor, incluya el código de país, empezando con el signo +
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='formMessage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Escriba su mensaje aquí...'
                    className={cn(
                      'resize-none',
                      { 'text-orange-500': characterCount > 450 },
                      {
                        'text-red-500': characterCount === 500
                      }
                    )}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e)
                      setCharacterCount(e.target.value.length)
                    }}
                    maxLength={500}
                    id='formMessage'
                  />
                </FormControl>
                <p
                  className={cn(
                    'text-xs text-right',
                    { 'text-orange-500': characterCount > 450 },
                    {
                      'text-red-500': characterCount === 500
                    }
                  )}
                >
                  {characterCount}/500
                </p>
                <FormDescription>
                  No te preocupes, tu mensaje es confidencial, solo lo leeré yo,
                  siéntete libre de expresar tus dudas o comentarios que tengas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Enviar formulario</Button>
        </form>
      </Form>
      <ToastContainer />
    </div>
  )
}
