import Link from 'next/link'

type Props = {
  mode: string
}

export const PCNav = ({mode}: Props) => {
  const linkColorClassName = mode === "primary" ? "text-white" : "text-red-300"

  return (
    <nav className="hidden lg:block">
      <ul className='flex items-center'>
        <li><Link href="/"><a className={`px-6 ${linkColorClassName}`}>Top</a></Link></li>
        <li><Link href="/works"><a className={`px-6 ${linkColorClassName}`}>Works</a></Link></li>
        <li><Link href="/posts"><a className={`px-6 ${linkColorClassName}`}>Blog</a></Link></li>
        <li><Link href="/contact"><a className={`button button-white border-2 p-1 px-6 ${linkColorClassName}`}>Contact</a></Link></li>
      </ul>
    </nav>
  )
}

