'use client'

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
    <form onSubmit={onSubmit} className="w-2/3 space-y-4">
      <div className="grid gap-4">
        <Label htmlFor="authenticate-email">Email</Label>
        <Input
          id="authenticate-email"
          name="authenticate-email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCorrect="off"
          required
        />

        <Label htmlFor="authenticate-password">password</Label>
        <Input
          id="authenticate-password"
          name="authenticate-password"
          placeholder="enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
