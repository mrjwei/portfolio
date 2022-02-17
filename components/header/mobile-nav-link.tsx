import React from "react"
import {useRouter} from 'next/router'
import Link from 'next/link'

type Props = {
  path: string,
  children: React.ReactNode
}

export const MobileNavLink = ({path, children}: Props) => {
  const router = useRouter()
  const className = router.asPath === path ? "text-red-300 bg-red-100 block px-8 py-3" : "text-red-300 bg-transparent block px-8 py-3"
  return (
    <Link href={path}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

