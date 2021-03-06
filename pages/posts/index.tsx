import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {GetStaticProps} from 'next'
import useTranslation from 'next-translate/useTranslation'
import {PostDataType} from '../../types';
import {getEntriesData} from '../../lib/entries'
import {getNumOfPages} from '../../lib/utils'
import {Layout} from '../../components/layout'
import {Header} from '../../components/header'
import {Main} from '../../components/main'
import {Card} from '../../components/card'
import {FilterButton} from '../../components/filterButton'
import {Pagination} from '../../components/pagination'
import {Footer} from '../../components/footer'

type Props = {
  postsData: PostDataType[]
}

const FILTERVALUES = {
  ALL: "#all",
  UIUX: "#ui/ux",
  HTMLCSS: "#html/css",
  FRONTEND: "#frontend",
  TUTORIAL: "#tutorial",
  TIPSTRICKS: "#tips&tricks"
}

const ITEMPERPAGE = 6

const Posts =  ({postsData}: Props) => {
  const router = useRouter()

  const {t} = useTranslation("posts")

  const initialNumOfPages = getNumOfPages(postsData.length, ITEMPERPAGE)

  const [filterValue, setFilterValue] = useState(FILTERVALUES.ALL)
  const [numOfPages, setNumOfPages] = useState(initialNumOfPages)
  const [currentPage, setCurrentPage] = useState<number | null>(null)

  useEffect(() => {
    if(router.isReady) {
      setCurrentPage(router.query.page ? Number(router.query.page) : 1)
    }
  }, [router.isReady])

  useEffect(() => {
    const numOfPosts = filterValue === "#all" ? postsData.length : postsData.filter(postData => postData.tags.includes(filterValue)).length

    const newNumOfPages = getNumOfPages(numOfPosts, ITEMPERPAGE)

    setNumOfPages(newNumOfPages)
  }, [filterValue])

  if (!currentPage) {
    return <div>loading...</div>
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    const value = target.value
    setFilterValue(value)
  }

  const handleMovePrev = () => {
    if (currentPage === 1) {
      setCurrentPage(1)
      router.push("/posts/?page=1", undefined, {shallow: true})
    } else {
      setCurrentPage(currentPage - 1)
      router.push(`/posts/?page=${currentPage - 1}`, undefined, {shallow: true})
    }
  }

  const handleMoveNext = () => {
    if (currentPage === numOfPages) {
      setCurrentPage(numOfPages)
      router.push(`/posts/?page=${numOfPages}`, undefined, {shallow: true})
    } else {
      setCurrentPage(currentPage + 1)
      router.push(`/posts/?page=${currentPage + 1}`, undefined, {shallow: true})
    }
  }

  const handleMoveToPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    setCurrentPage(parseInt(target.value))
    router.push(`/posts/?page=${target.value}`, undefined, {shallow: true})
  }

  const filters = [
    {
      label: "all",
      value: FILTERVALUES.ALL,
    },
    {
      label: "ui/ux",
      value: FILTERVALUES.UIUX,
    },
    {
      label: "html/css",
      value: FILTERVALUES.HTMLCSS,
    },
    {
      label: "frontend",
      value: FILTERVALUES.FRONTEND,
    },
    {
      label: "tutorial",
      value: FILTERVALUES.TUTORIAL,
    },
    {
      label: "tips&tricks",
      value: FILTERVALUES.TIPSTRICKS,
    }
  ]

  return (
    <Layout>
      <Head>
        <title>
          Posts: Jesse Wei
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="Posts by Jesse Wei."
          key="desc"
        />
        <meta
          property="og:title"
          content="Posts: Jesse Wei"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Posts by Jesse Wei."
          key="ogdesc"
        />
        <meta
          property="og:url"
          content="https://jessewei.jp/posts"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="/images/global-images/preview.png"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="jessewei"
          key="ogsitename"
        />
        <meta
          name="twitter:card"
          content="summary"
          key="twcard"
        />
        <meta
          name="twitter:creator"
          content="@jweiit"
          key="twhandle"
        />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <Main className='bg-mute py-36'>
        <div className='container'>
          <h2 className='mb-8'>{t("title")}</h2>
          <div className='flex justify-start'>
            {filters.map((filter, index) => {
              const {label, value} = filter
              return (
                <FilterButton
                  key={index}
                  label={label}
                  value={value}
                  isActive={value === filterValue}
                  handleClick={handleClick}
                />
              )
            })}
          </div>
          {filterValue === "#all" ? (
            <div className='my-24 md:grid md:grid-cols-2 md:gap-12 md:justify-items-stretch lg:grid-cols-3 lg:gap-16'>
              {postsData.slice(ITEMPERPAGE * (currentPage - 1), ITEMPERPAGE * currentPage).map((postData, index) => {
                return (
                  <div key={index} className='mb-8 drop-shadow-card md:mb-0'>
                    <Card
                      entryData={postData}
                      wrapperClassName="w-full"
                      cardClassName="h-full"
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='my-24 md:grid md:grid-cols-2 md:gap-12 md:justify-items-stretch lg:grid-cols-3 lg:gap-16'>
              {postsData.filter(postData => postData.tags.includes(filterValue)).slice(ITEMPERPAGE * (currentPage - 1), ITEMPERPAGE * currentPage).map((postData, index) => {
                return (
                  <div key={index} className='mb-8 drop-shadow-card md:mb-0'>
                    <Card
                      entryData={postData}
                      wrapperClassName="w-full"
                      cardClassName="h-full"
                    />
                  </div>
                )
              })}
            </div>
          )}
          <Pagination
            numOfPages={numOfPages}
            currentPage={currentPage}
            handleMovePrev={handleMovePrev}
            handleMoveNext={handleMoveNext}
            handleMoveToPage={handleMoveToPage}
          />
        </div>
      </Main>
      <Footer position="static" />
    </Layout>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async (context: any) => {
  const postsData = getEntriesData(`${context.locale}/posts`)
  return {
    props: {
      postsData
    }
  }
}