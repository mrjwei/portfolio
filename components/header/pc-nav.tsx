import Link from 'next/link'

export const PCNav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex'>
        <li><Link href="/"><a className="text-red-300 px-5">Top</a></Link></li>
        <li><Link href="/works"><a className="text-red-300 px-5">Works</a></Link></li>
        <li><Link href="/posts"><a className="text-red-300 px-5">Blog</a></Link></li>
        <li><Link href="/contact"><a className="text-red-300 px-5">Contact</a></Link></li>
      </ul>
    </nav>
  )
}

