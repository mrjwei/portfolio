import Link from 'next/link'
import {Work, WorkDataType, Post} from '../../types'
import {Tags} from '../tags'
import {Button} from '../button'

type Props = {
  item: Work | Post
  prevWorkData: WorkDataType | null
  nextWorkData: WorkDataType | null
}

export const Article = ({item, prevWorkData, nextWorkData}: Props) => {
  const {title, tags, content} = item

  return (
    <article className='bg-white p-20 rounded-md lg:col-span-2'>
      <div>
        {!("image" in item) && <time>{item.date}</time>}
        <h1 className="text-5xl mb-3">{title}</h1>
        <Tags tags={tags} isLink={true} fontSize="text-lg" />
        <div className='mt-12 mb-24' dangerouslySetInnerHTML={{
          __html: `<div class="prose prose-a:text-red-300 prose-h2:text-3xl prose-h2:mb-8 prose-h3:text-2xl prose-h3:mb-6 prose-h4:text-xl prose-h4:underline prose-h4:mb-6">${content}</div>`
        }} />
      </div>
      <div className='w-full flex justify-between'>
        <div className='flex'>
          {prevWorkData ? (
            <Button mode='primary-text' className='mr-12'>
              <Link href={`/works/${prevWorkData.id}`}>
                Prev Work
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true} className='mr-12'>
              Prev Work
            </Button>
          )}
          {nextWorkData ? (
            <Button mode='primary-text'>
              <Link href={`/works/${nextWorkData.id}`}>
                Next Work
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true}>
              Next Work
            </Button>
          )}
        </div>
        <div>
          <Button mode="primary-border">
            <Link href="/works">Back to Works</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
