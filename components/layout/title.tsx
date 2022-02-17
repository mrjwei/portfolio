type Props = {
  label: string
  title: string
  reverse: boolean
  className: string
}

export const Title = ({label, title, reverse, className}: Props) => {
  return (
    <div className={className}>
      <p className={`${reverse ? "text-white": "text-red-300"} mb-3`}>{label}</p>
      <h2 className={`${reverse && "text-white"}`}>{title}</h2>
    </div>
  )
}

