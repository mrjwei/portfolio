import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {Work, WorkDataType, Post, PostDataType} from '../../types'
import {Tags} from '../tags'
import {Button} from '../button'

type Props = {
  entry: Work | Post
  prevData: WorkDataType | PostDataType | null
  nextData: WorkDataType | PostDataType | null
}

export const Article = ({entry, prevData, nextData}: Props) => {
  const {t} = useTranslation("common")
  const {title, tags, content} = entry

  return "image" in entry ? (
    <article className='bg-white p-8 lg:p-20 rounded-md lg:col-span-5'>
      <div>
        <h1 className="text-3xl lg:text-5xl mb-3">{title}</h1>
        <Tags tags={tags} isLink={true} fontSize="text-lg" />
        <div className='mt-6 mb-12' dangerouslySetInnerHTML={{
          __html: `<div class="prose prose-a:text-red-300 prose-h2:text-3xl prose-h2:mb-8 prose-h3:text-2xl prose-h3:mb-6 prose-h4:text-xl prose-h4:italic prose-h4:mb-6 prose-pre:bg-transparent prose-pre:p-0 prose-">${content}</div>`
        }} />
      </div>
      <div className='w-full lg:flex lg:justify-between'>
        <div className='flex justify-between mb-6 lg:mb-0'>
          {prevData ? (
            <Button mode='primary-text' className='mr-12'>
              <Link href={`/works/${prevData.id}`}>
                {t("workNavigation.prevButton")}
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true} className='mr-12'>
              {t("workNavigation.prevButton")}
            </Button>
          )}
          {nextData ? (
            <Button mode='primary-text'>
              <Link href={`/works/${nextData.id}`}>
                {t("workNavigation.nextButton")}
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true}>
              {t("workNavigation.nextButton")}
            </Button>
          )}
        </div>
        <div>
          <Button mode="primary-border" className='mx-auto lg:mx-0'>
            <Link href="/works">{t("backToWorksButton")}</Link>
          </Button>
        </div>
      </div>
    </article>
  ) : (
    <article className='bg-white p-8 lg:p-20 rounded-md lg:col-span-5'>
      <div>
        <time className='block mb-6 text-gray-400'>{entry.date}</time>
        <h1 className="text-3xl lg:text-5xl mb-3">{title}</h1>
        <Tags tags={tags} isLink={true} fontSize="text-lg" />
        <div className='mt-12 mb-24' dangerouslySetInnerHTML={{
          __html: `<div class="prose prose-a:text-red-300 prose-h2:text-3xl prose-h2:mb-8 prose-h3:text-2xl prose-h3:mb-6 prose-h4:text-xl prose-h4:italic prose-h4:mb-6 prose-pre:bg-transparent prose-pre:p-0 prose-">${content}</div>`
        }} />
      </div>
      <div className='w-full lg:flex lg:justify-between'>
        <div className='flex justify-between mb-6 lg:mb-0'>
          {prevData ? (
            <Button mode='primary-text' className='mr-12'>
              <Link href={`/posts/${prevData.id}`}>
                {t("postNavigation.prevButton")}
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true} className='mr-12'>
              {t("postNavigation.prevButton")}
            </Button>
          )}
          {nextData ? (
            <Button mode='primary-text'>
              <Link href={`/posts/${nextData.id}`}>
                {t("postNavigation.nextButton")}
              </Link>
            </Button>
          ) : (
            <Button mode='primary-text' disabled={true}>
              {t("postNavigation.nextButton")}
            </Button>
          )}
        </div>
        <div>
          <Button mode="primary-border" className='mx-auto lg:mx-0'>
            <Link href="/posts">
              {t("backToPostsButton")}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
