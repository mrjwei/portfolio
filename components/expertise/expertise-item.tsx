type Props = {
  image: string
  alt: string
  title: string
  items: Array<string>
}

export const ExpertiseItem = ({image, alt, title, items}: Props) => {
  return (
    <div className="flex items-start mb-12 lg:mb-0">
      <img src={image} alt={alt} className="w-16 mr-8" />
      <div>
        <h3 className="mb-3">{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-1 last:mb-0">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

