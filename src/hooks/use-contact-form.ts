import { FormSchema } from '@/app/schema/form-zod-schema'
import type { FormData } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import type * as z from 'zod'

interface Props {
  pathname: string
}

const useContactForm = ({ pathname }: Props) => {
  const contentType = 'application/json'
  const router = useRouter()
  const toastSuccessId = useId()
  const [isResponseOk, setIsResponseOk] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (isResponseOk) {
      toast.success(successMsg, {
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
  }, [isResponseOk, errorMsg, toastSuccessId, router, successMsg])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      formMessage: ''
    }
  })

  const updateRouteStats = async () => {
    try {
      const response = await fetch('/api/routes-stats', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify({ pathname })
      })
      if (!response.ok) {
        throw new Error(response.status.toString())
      }
    } catch (error) {
      console.error(error)
    }
  }

  const postData = async (values: FormData) => {
    try {
      const response = await fetch('/api/form-db', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify({ ...values, pathname })
      })

      const data = await response.json()
      if (data?.success) {
        setIsResponseOk(true)
        setSuccessMsg(data?.message as string)
        await fetch('/api/send', {
          method: 'POST',
          headers: {
            Accept: contentType,
            'Content-Type': contentType
          },
          body: JSON.stringify({ ...values, pathname })
        })
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
    await updateRouteStats()
  }

  return {
    onSubmit,
    form
  }
}

export default useContactForm
