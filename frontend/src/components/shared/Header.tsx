import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
// import Logo from '@/assets/img/logo.png'
import ConnectButton from '@/components/ui/ConnectButton'
import { useConnectWallet } from '@web3-onboard/react'
import Button from './Button'
import { addInput } from '@/lib/cartesi'
import { creators, dappAddress } from '@/lib/utils'
import { useRollups } from '@/hooks/useRollups'

const Header = () => {

  const rollups = useRollups(dappAddress)
  const dispatch = useDispatch()
  const [{ wallet }] = useConnectWallet()

const setCreators = async () => {

  const account = wallet?.accounts[0].address
  if (!account) return toast.error('Connect account')

  const jsonPayload = JSON.stringify({
    method: 'setCreators',
    creators,
  })

  const tx = await addInput(JSON.stringify(jsonPayload), dappAddress, rollups)

  const result = await tx.wait(1)
  console.log(result)
}

  return (
    <div className="mx-auto max-w-screen-2xl">
      <header className="flex items-center justify-between py-4 md:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
          aria-label="logo"
        >
          {/* <Image
            className=""
            data-aos="zoom-in"
            src={Logo}
            alt="greedy image"
            width={70}
            height={50}
            loading="lazy"
          /> */}
          Blog Analyzr
        </Link>
        <nav className="hidden gap-12 lg:flex">
          <Link
            href="/blog"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Blogs
          </Link>
         
          <Link
            href="/creators"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Creators
          </Link>
        </nav>
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <div className="flex items-center gap-8">
            <Button onClick={setCreators}>Set Creators</Button>
            <ConnectButton />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    </div>
  )
}

export default Header
