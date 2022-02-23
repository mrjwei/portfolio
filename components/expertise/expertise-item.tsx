import Image from 'next/image';

type Props = {
  image: string
  alt: string
  title: string
  items: Array<string>
}

export const ExpertiseItem = ({image, alt, title, items}: Props) => {
  return (
    <div className="flex items-start mb-12 lg:mb-0">
      <div className='w-16 relative mr-6'>
        <Image src={image} alt={alt} layout="responsive" width={102} height={116} />
      </div>
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

