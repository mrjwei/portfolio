import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {MobileNavLink} from './mobile-nav-link'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MobileNav = ({isOpen, onClose}: Props) => {
  return (
    <nav className={`z-10 w-full bg-white absolute top-0 left-0 h-screen lg:hidden transition transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className='mt-14'>
        {[
          {href: "/", label: "Top"},
          {href: "/works", label: "Works"},
          {href: "/posts", label: "Blog"},
          {href: "/contact", label: "Contact"},
        ].map(item => {
          const {href, label} = item
          return (
            <li key={href}>
              <MobileNavLink path={href}>{label}</MobileNavLink>
            </li>
          )
        })}
      </ul>
      <button className='text-red-200 text-2xl absolute top-3 right-8' onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </nav>
  )
}

