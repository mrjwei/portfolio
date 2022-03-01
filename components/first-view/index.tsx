import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BsArrowRight
} from 'react-icons/bs'

type WidthType = number | null

export const FirstView = () => {
  const [width, setWidth] = useState(null as WidthType)

  const handleLoad = () => {
    setWidth(window.innerWidth)
  }

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("load", handleLoad)
    window.addEventListener("resize", handleResize)
    return () => {
      window.addEventListener("load", handleLoad)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="w-full pt-28 bg-red-300 md:h-[35rem] lg:h-screen lg:pt-36">
      <div className="container h-full md:grid md:grid-cols-2 md:grid-rows-1">
        <div className="mb-16 md:mb-0 md:mr-14 md:flex md:flex-col md:justify-start lg:translate-y-10">
          <h1 className='text-white mb-12'>
            Hi! I&apos;m Jesse Wei.<br />
            I Create Beautiful & User-Friendly Web Services That Help Business Grow.
          </h1>
          <div className='md:flex'>
            <Link href="/contact">
              <a className='flex justify-center items-center button button-bg-white md:max-w-[12rem] md:mr-12'><span className='mr-3'>Contact Me</span> <BsArrowRight /></a>
            </Link>
            <Link href="/works">
              <a className='flex justify-center items-center button button-white md:max-w-[12rem]'><span className='mr-3'>See Works</span> <BsArrowRight /></a>
            </Link>
          </div>
        </div>
        <div className="w-full h-[30rem] relative flex  md:h-full">
          <Image src="/images/global-images/first-view-illustration.svg" alt="first view illustration of Jesse Wei" className="" layout='fill' objectFit='contain' objectPosition={`${(width && width >= 768) ? "right bottom" : "center bottom"}`} />
        </div>
      </div>
    </div>
  )
}
