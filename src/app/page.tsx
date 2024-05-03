import { InputForm } from '@/components/form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Food Ordering Manager</h1>
      <InputForm />
    </main>
  )
}
