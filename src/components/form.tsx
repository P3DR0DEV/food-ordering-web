'use client'

import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    toast.success('Success', {
      description: 'You have successfully authenticated.',
    })
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-4">
      <div className="grid gap-2">
        <Label htmlFor="authenticate-email" className="text-zinc-700">
          Email
          <Input
            id="authenticate-email"
            name="authenticate-email"
            className="text-zinc-800 border border-zinc-400 mt-1 placeholder:text-zinc-400"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCorrect="off"
            required
          />
        </Label>

        <Label htmlFor="authenticate-password" className="text-zinc-700">
          Password
          <Input
            id="authenticate-password"
            name="authenticate-password"
            className="text-zinc-800 border border-zinc-400 mt-1 placeholder:text-zinc-400"
            placeholder="enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            required
          />
        </Label>
      </div>
      <Button type="submit">SignIn</Button>
      <p className="text-xs text-zinc-400">
        Don&apos;t have an account?
        <Link href="/signup" className="text-zinc-500">
          SignUp
        </Link>
      </p>
    </form>
  )
}
