import Link from 'next/link'
import {WorkDataType, PostDataType} from '../../types'
import {Tags} from '../tags'

type Props = {
  index: number | string
  itemData: WorkDataType | PostDataType
  wrapperClassName?: string
  cardClassName?: string
}

export const Card = ({index, itemData, wrapperClassName, cardClassName}: Props) => {
  const {id, title, tags, description, ...props} = itemData

  if ("image" in props) {
    return (
      <Link href={`/works/${id}`}>
        <a className={`drop-shadow-2xl ${wrapperClassName}`}>
          <div key={index} className={`card ${cardClassName}`}>
            <div className="card-img-wrapper">
              <img src={props.image} alt={description} className="card-img" />
            </div>
            <div className="card-body">
              <h4>{title}</h4>
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
        <div key={index} className="card h-full min-h-card hover:text-red-300">
          <div className="card-body">
            <time className='block text-gray-400 mb-3'>{props.date}</time>
            <h4 className='mb-1'>{title}</h4>
            <Tags tags={tags} isLink={false} />
            <p className='mt-3'>{description.substring(0, 100)}...</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

