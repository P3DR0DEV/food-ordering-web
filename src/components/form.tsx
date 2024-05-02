'use client'

import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export function InputForm() {
  const { toast } = useToast()

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      duration: 3000,
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <form onSubmit={onSubmit} className="w-2/3 space-y-4">
      <div className="grid gap-1">
        <Label htmlFor="authenticate-email">Email</Label>

        <Input
          id="authenticate-email"
          name="authenticate-email"
          placeholder="name@example.com"
          type="email"
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
