import Link from 'next/link'

type Props = {
  mode: string
}

export const PCNav = ({mode}: Props) => {
  return (
    <nav className="hidden lg:block">
      <ul className='flex items-center'>
        <li><Link href="/"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>Top</a></Link></li>
        <li><Link href="/works"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>Works</a></Link></li>
        <li><Link href="/posts"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>Blog</a></Link></li>
        <li><Link href="/contact"><a className={`button border-2 p-1 px-6 ${mode === "primary" ? "button-white text-white" : "button-primary text-red-300"}`}>Contact</a></Link></li>
      </ul>
    </nav>
  )
}

