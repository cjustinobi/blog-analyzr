'use client'



import Header from '@/components/shared/Header'
import CreateGameModal from '@/components/ui/CreateGameModal'


export default function Home() {
  return (
    <div className="md:px-custom p-custom-sm text-gray-500">
      <Header />
      <CreateGameModal />
    </div>
  )
}
