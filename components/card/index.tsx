import Link from 'next/link'
import Image from 'next/image'
import {WorkDataType, PostDataType} from '../../types'
import {Tags} from '../tags'

type Props = {
  itemData: WorkDataType | PostDataType
  wrapperClassName?: string
  cardClassName?: string
}

export const Card = ({itemData, wrapperClassName, cardClassName}: Props) => {
  const {id, title, tags, description, ...props} = itemData

  if ("image" in props) {
    return (
      <Link href={`/works/${id}`}>
        <a className={`drop-shadow-2xl ${wrapperClassName}`}>
          <div className={`card rounded-md ${cardClassName}`}>
            <Image src={props.image} alt={description} layout="responsive" width={800} height={400} />
            <div className="card-body">
              <h4 className='text-lg mb-2'>{title}</h4>
              <Tags tags={tags} isLink={false} />
            </div>
          </div>
        </a>
      </Link>
    )
  }
  return (
    <Link href={`/posts/${id}`}>
      <a className='block w-full h-full drop-shadow-2xl border-solid border-t-[0.8rem] border-red-300'>
        <div className="card rounded-md h-full min-h-card hover:text-red-300">
          <div className="card-body">
            <time className='block text-gray-400 mb-3'>{props.date}</time>
            <h4 className='text-lg mb-2'>{title}</h4>
            <Tags tags={tags} isLink={false} />
            <p className='mt-3'>{description.substring(0, 100)}...</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

