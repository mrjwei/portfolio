import {useEffect, useState, memo} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {MobileNav} from './mobile-nav'
import {PCNav} from './pc-nav'

type SizeType = {
  width: undefined | number
  height: undefined | number
}

export const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  } as SizeType)

  const onClose = () => {
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
    <header className="w-full py-3 leading-8 relative">
      <div className="container flex justify-between">
        <div className='flex flex-col justify-center'>
          <Link href="/">
            <a>
              <img src="/images/global-images/logo-primary.svg" alt="logo of Jesse Wei" className='w-full max-w-logo' />
            </a>
          </Link>
        </div>
        <button
          className='text-2xl text-red-300 lg:hidden'
          onClick={() => setIsOpen(true)}
        >
            <FontAwesomeIcon icon={faBars} />
        </button>
        <MobileNav
          isOpen={isOpen}
          onClose={onClose}
        />
        <PCNav />
      </div>
    </header>
  )
})
