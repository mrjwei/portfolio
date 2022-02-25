import {Work, Post} from '../../types'
import {Tags} from '../tags'

type Props = {
  item: Work | Post
}

export const Article = ({item}: Props) => {
  const {title, tags, content} = item

  return (
    <article className='bg-white p-20 rounded-lg lg:col-span-2'>
      <div>
        {(item as Post).date && <time>{(item as Post).date}</time>}
        <h1 className="text-5xl mb-3">{title}</h1>
        <Tags tags={tags} isLink={true} fontSize="text-lg" />
        <div className='mt-12' dangerouslySetInnerHTML={{
          __html: `<div class="prose prose-a:text-red-300 prose-h2:text-3xl prose-h2:mb-8 prose-h3:text-2xl prose-h3:mb-6 prose-h4:text-xl prose-h4:underline prose-h4:mb-6">${content}</div>`
        }} />
      </div>
    </article>
  )
}
