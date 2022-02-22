import { AiOutlineClose } from "react-icons/ai"
import {MobileNavLink} from './mobile-nav-link'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const MobileNav = ({isOpen, handleClose}: Props) => {
  return (
    <nav className={`z-10 w-full bg-white absolute top-0 left-0 h-screen lg:hidden transition transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className='mt-14'>
        {[
          {href: "/", label: "Top"},
          {href: "/works", label: "Works"},
          {href: "/posts", label: "Posts"},
          {href: "/contact", label: "Contact"},
        ].map((item, index) => {
          const {href, label} = item
          return (
            <li key={index}>
              <MobileNavLink path={href}>{label}</MobileNavLink>
            </li>
          )
        })}
      </ul>
      <button className='text-red-200 text-2xl absolute top-3 right-8' onClick={handleClose}>
        <AiOutlineClose />
      </button>
    </nav>
  )
}

