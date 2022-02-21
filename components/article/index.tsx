import {Work, Post} from '../../types'
import {Tags} from '../tags'

type Props = {
  item: Work | Post
}

export const Article = ({item}: Props) => {
  // return work article
  if ("image" in item) {
    const {title, tags, content} = item
    return (
      <article className='lg:col-span-2'>
        <div>
          <h1 className="text-5xl mb-3">{title}</h1>
          <Tags tags={tags} isLink={true} fontSize="text-lg" />
          <div className='mt-8' dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </article>
    )
  }
  // otherwise return post article
  const {date, title, tags, content} = item
  return (
    <article className='lg:col-span-2'>
      <time>{date}</time>
      <h1 className="text-5xl mb-3">{title}</h1>
      <Tags tags={tags} isLink={true} fontSize="text-lg" />
      <div dangerouslySetInnerHTML={{__html: content}} />
    </article>
  )
}
