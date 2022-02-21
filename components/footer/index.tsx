import Link from 'next/link'
import {
  SiGithub,
  SiTwitter,
  SiPinterest
} from "react-icons/si"

type Props = {
  position: "static" | "absolute"
}

export const Footer = ({position}: Props) => {
  return (
    <footer className={`${position === "absolute" && "absolute"} w-full bg-red-300 pt-12 pb-2 left-0 bottom-0`}>
      <div className='container'>
        <div className="lg:grid lg:grid-cols-2 lg:mb-8">
          <Link href="/">
            <a className='hidden lg:flex lg:flex-col lg:justify-center'>
              <img className='max-w-[10rem]' src="/images/global-images/logo-with-text.svg" alt="Jesse Wei hp logo" />
            </a>
          </Link>
          <ul className='flex justify-center mb-8 lg:mb-0 lg:justify-end'>
            <li className='mx-3 lg:mx-6'>
              <Link href="/">
                <a className='text-2xl text-white'>
                  <SiGithub />
                </a>
              </Link>
            </li>
            <li className='mx-3 lg:mx-6'>
              <Link href="/">
                <a className='text-2xl text-white'>
                  <SiTwitter />
                </a>
              </Link>
            </li>
            <li className='mx-3 lg:mx-6 lg:mr-0'>
              <Link href="/">
                <a className='text-2xl text-white'>
                  <SiPinterest />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-white"><small>&copy;2022 Jesse Wei. All rights reserved.</small></p>
      </div>
    </footer>
  )
}

