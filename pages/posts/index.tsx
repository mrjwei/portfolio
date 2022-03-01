import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {GetStaticProps} from 'next'
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

  const initialNumOfPages = getNumOfPages(postsData.length, ITEMPERPAGE)

  const [filterValue, setFilterValue] = useState(FILTERVALUES.ALL)
  const [numOfPages, setNumOfPages] = useState(initialNumOfPages)
  const [currentPage, setCurrentPage] = useState(router.query.page ? Number(router.query.page) : 1)

  useEffect(() => {
    const numOfPosts = filterValue === "#all" ? postsData.length : postsData.filter(postData => postData.tags.includes(filterValue)).length

    const newNumOfPages = getNumOfPages(numOfPosts, ITEMPERPAGE)

    setNumOfPages(newNumOfPages)
  }, [filterValue])

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
        <title>Posts: Jesse Wei</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <Main className='bg-mute py-36'>
        <div className='container'>
          <h2 className='mb-8'>Posts.</h2>
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
            <div className='my-24 md:grid md:grid-cols-2 md:gap-12 md:justify-items-stretch lg:grid-cols-3 lg:gap-x-24 lg:gap-y-20'>
              {postsData.slice(ITEMPERPAGE * (currentPage - 1), ITEMPERPAGE * currentPage).map((postData, index) => {
                return (
                  <div className='mb-8 md:mb-0'>
                    <Card
                      key={index}
                      entryData={postData}
                      wrapperClassName="w-full"
                      cardClassName="h-full"
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='my-24 md:grid md:grid-cols-2 md:gap-12 md:justify-items-stretch lg:grid-cols-3 lg:gap-x-24 lg:gap-y-20'>
              {postsData.filter(postData => postData.tags.includes(filterValue)).slice(ITEMPERPAGE * (currentPage - 1), ITEMPERPAGE * currentPage).map((postData, index) => {
                return (
                  <div className='mb-8 md:mb-0'>
                    <Card
                      key={index}
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

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getEntriesData("posts")
  return {
    props: {
      postsData
    }
  }
}