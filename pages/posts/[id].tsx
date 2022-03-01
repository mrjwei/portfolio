import Head from 'next/head'
import {Post, PostDataType} from '../../types'
import {Layout} from '../../components/layout';
import {Header} from '../../components/header'
import {Article} from '../../components/article'
import {Sidebar} from '../../components/sidebar'
import {Footer} from '../../components/footer'
import {getEntryIds, getContentAndData, getEntriesData} from '../../lib/entries'
import { areSimilar } from '../../lib/utils'

type Props = {
  post: Post
  allPostsData: PostDataType[]
  allPostIds: string[]
}

const Post =  ({post, allPostsData, allPostIds}: Props) => {
  // get similar works by check if a work share at least one tag with currently displayed one
  const allOtherItems = allPostsData.filter(postData => postData.id !== post.id)
  const similarPostsData = allOtherItems.filter(postData => areSimilar(postData.tags, post.tags))

  // get prev and next work
  const currentIndex = allPostIds.indexOf(post.id)
  const prevPostData = currentIndex === 0 ? null : allPostsData[currentIndex - 1]
  const nextPostData = currentIndex === allPostIds.length - 1 ? null : allPostsData[currentIndex + 1]

  return (
    <Layout className='bg-mute'>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <div className='container py-36 lg:grid lg:grid-cols-3 lg:gap-16'>
        <Article
          entry={post}
          prevData={prevPostData}
          nextData={nextPostData}
        />
        <Sidebar entries={similarPostsData}/>
      </div>
      <Footer position='static' />
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = getEntryIds("posts")
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}: {params: {id: string}}) => {
  const post = await getContentAndData("posts", params.id)
  const allPostsData = getEntriesData("posts")
  const allPostIds = getEntryIds("posts").map(entry => entry.params.id)
  return {
    props: {
      post,
      allPostsData,
      allPostIds
    }
  }
}




