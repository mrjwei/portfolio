import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaBars} from 'react-icons/fa';
import {MobileNav} from './mobile-nav'
import {PCNav} from './pc-nav'

type SizeType = {
  width: undefined | number
  height: undefined | number
}

type Props = {
  mode: "primary" | "light"
}

export const Header = ({mode}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  } as SizeType)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className={`absolute w-full top-0 left-0 py-3 leading-8 ${mode === "light" && "bg-white"}`}>
      <div className="container flex justify-between">
        <div className='flex flex-col justify-center'>
          <Link href="/">
            <a className='w-8'>
              <Image src={`${mode === "primary" ? "/images/global-images/logo-white.svg" : "/images/global-images/logo-primary.svg"}`} alt="Jesse Wei hp logo" className='w-full max-w-logo' width={222} height={150} layout="responsive" />
            </a>
          </Link>
        </div>
        <div className="flex justify-end">
          <button
            className={`ml-6 text-2xl order-last lg:hidden ${mode === "primary" ? "text-white" : "text-red-300"}`}
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
          <MobileNav
            isOpen={isOpen}
            handleClose={handleClose}
          />
          <PCNav mode={mode} />
        </div>
      </div>
    </header>
  )
}
