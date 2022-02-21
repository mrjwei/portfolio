type Props = {
  label: string
  reverse: boolean
  className: string
  children: React.ReactNode
}

export const Title = ({label, reverse, className, children}: Props) => {
  return (
    <div className={className}>
      <p className={`${reverse ? "text-white": "text-red-300"} mb-3`}>{label}</p>
      <h2 className={`${reverse && "text-white"}`}>
        {children}
      </h2>
    </div>
  )
}