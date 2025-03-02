'use client'

import { postSubscriptions } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../components/button'
import { InputField, InputIcon, InputRoot } from '../components/input'

const subscriptionsSchema = z.object({
  name: z.string().min(3, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionsSchema = z.infer<typeof subscriptionsSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionsSchema>({
    resolver: zodResolver(subscriptionsSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionsSchema) {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await postSubscriptions({ name, email, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}
