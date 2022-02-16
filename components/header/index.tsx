import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full">
      <div className="container flex justify-between">
        <div className="container">
          <Link href="/">
            <img src="/images/global-images/logo-primary.svg" alt="logo of Jesse Wei" className='max-w-logo' />
          </Link>
        </div>
        <nav>
          <ul className='flex'>
            <li><Link href="/">Top</Link></li>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/posts">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
