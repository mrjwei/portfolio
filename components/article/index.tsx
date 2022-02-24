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
          <div className='mt-12' dangerouslySetInnerHTML={{
            __html: `<div class="prose prose-a:text-red-300 prose-h2:text-3xl prose-h2:mb-8 prose-h3:text-2xl prose-h3:mb-6 prose-h4:text-xl prose-h4:underline prose-h4:mb-6">${content}</div>`
          }} />
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
