import React from "react"

type Props = {
  className?: string
  children: React.ReactNode
}

export const Layout = ({className, children}: Props) => {
  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}