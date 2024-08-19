import Image from 'next/image'
import Counter from './component/Counter/Counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <h1>This is Home Page</h1>
      <Counter />
    </main>
  )
}
