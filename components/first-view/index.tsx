import {useState, useEffect} from 'react'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Image from 'next/image'
import {
  BsArrowRight
} from 'react-icons/bs'

type WidthType = number | null

export const FirstView = () => {
  const {t, lang} = useTranslation("top")

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
    <div className="w-full pt-28 bg-red-300 xl:h-screen xl:pt-36">
      <div className="container h-full md:grid md:grid-cols-2 md:grid-rows-1">
        <div className="mb-16 md:mb-0 md:mr-14 md:pb-36 md:flex md:flex-col md:justify-start lg:translate-y-10">
          <h1 className='text-white mb-12'>
            {t("title.part1")}<br />
            {t("title.part2")}
          </h1>
          <div className='md:flex'>
            <Link href="/contact">
              <a className='flex justify-center items-center button button-bg-white mb-8 md:mb-0 md:max-w-[12rem] md:mr-8 xl:mr-12'><span className='mr-2'>{t("contactButton")}</span> <BsArrowRight /></a>
            </Link>
            <Link href="/works">
              <a className='flex justify-center items-center button button-white md:max-w-[12rem]'><span className='mr-3'>{t("seeWorksButton")}</span> <BsArrowRight /></a>
            </Link>
          </div>
        </div>
        <div className="w-full min-h-[30rem] relative flex">
          <Image src="/images/global-images/first-view-illustration.svg" alt="first view illustration of Jesse Wei" className="" layout='fill' objectFit='contain' objectPosition={`${(width && width >= 768) ? "right bottom" : "center bottom"}`} />
        </div>
      </div>
    </div>
  )
}
