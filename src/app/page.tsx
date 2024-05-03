import Image from 'next/image'

import { InputForm } from '@/components/form'
import { Separator } from '@/components/separator'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center md:grid md:grid-cols-2 p-2">
      <div>
        <h1 className="text-3xl font-bold capitalize">Welcome</h1>
        <h2 className="text-base">Sign in to your account</h2>
        <Separator>SignIn with Email</Separator>
        <InputForm />
      </div>
      <div className="hidden md:block">
        <Image src={'/vercel.svg'} alt="Vercel Logo" width={72} height={16} />
      </div>
    </main>
  )
}
