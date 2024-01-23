'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { FormData } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import type * as z from 'zod'
import { FormSchema } from '../schema/form-zod-schema'

export default function ContactMe() {
  const contentType = 'application/json'
  const router = useRouter()
  const toastSuccessId = useId()
  const [isResponseOk, setIsResponseOk] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (isResponseOk) {
      toast.success('Gracias por su interés, le contactaramos en breve', {
        onClose: () => {
          router.push('/')
        },
        position: 'bottom-right',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        toastId: toastSuccessId
      })
    } else if (errorMsg) {
      toast.error(errorMsg, {
        position: 'bottom-right',
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        toastId: toastSuccessId
      })
    }
  }, [isResponseOk, errorMsg, toastSuccessId, router])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    }
  })

  const postData = async (values: FormData) => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify(values)
      })
      const data = await response.json()
      if (data?.success) {
        setIsResponseOk(true)
      } else {
        setIsResponseOk(false)
        setErrorMsg(data?.message as string)
      }
      if (!response.ok) {
        throw new Error(response.status.toString())
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    await postData(values)
  }

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
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      <ToastContainer />
    </div>
  )
}
