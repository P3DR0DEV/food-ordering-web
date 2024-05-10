import Image from 'next/image'

import { InputForm } from '@/components/form'

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center md:grid md:grid-cols-2 p-2">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold capitalize">Welcome</h1>
          <h2 className="text-lg">Sign in to your account</h2>
          <h3 className="text-base">sign in with email</h3>
        </div>
        <InputForm />
      </div>
      <div className="hidden md:block">
        <Image src={'/vercel.svg'} alt="Vercel Logo" width={72} height={16} />
      </div>
    </main>
  )
}
