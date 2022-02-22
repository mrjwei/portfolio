import Head from 'next/head'
import {Work, WorkDataType} from '../../types'
import {Layout} from '../../components/layout'
import {Header} from '../../components/header'
import {Article} from '../../components/article'
import {Sidebar} from '../../components/sidebar'
import {Footer} from '../../components/footer'
import { getAllWorkIds, getWorkDataAndContent, getWorksData } from '../../lib/works'

type Props = {
  item: Work
  moreItems: Array<WorkDataType>
}

const Work =  ({item, moreItems}: Props) => {
  const {title} = item
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <div className='container py-20 lg:grid lg:grid-cols-3'>
        <Article item={item} />
        <Sidebar
          items={moreItems}
        />
      </div>
      <Footer position='static' />
    </Layout>
  )
}

export default Work

export const getStaticPaths = async () => {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({params}: any) => {
  const item = await getWorkDataAndContent(params.id)
  const moreItems = getWorksData((fileName: string) => !fileName.includes(item.id))
  return {
    props: {
      item,
      moreItems
    }
  }
}