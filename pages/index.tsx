import Head from 'next/head'
import {GetStaticProps} from 'next'
import {getEntriesData} from '../lib/entries'
import {Layout} from '../components/layout'
import {Header} from '../components/header'
import {FirstView} from '../components/first-view';
import {Expertise} from '../components/expertise';
import {Works} from '../components/works';
import {Posts} from '../components/posts';
import {About} from '../components/about';
import {Contact} from '../components/contact';
import {Main} from '../components/main'
import {Footer} from '../components/footer'

const Home = ({worksData, postsData}: any) => {
  return (
    <Layout>
      <Head>
        <title>
          Jesse Wei: Beautiful & User-friendly Web Services
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="Software Engineer with a focus on developing beautiful and user-friendly web services. Based in Japan and speaks English, Japanese, Chinese and Korean. Available for web development projects and consulting services."
          key="desc"
        />
        <meta
          property="og:title"
          content="Jesse Wei: Beautiful & User-friendly Web Services"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Software Engineer with a focus on developing beautiful and user-friendly web services. Based in Japan and speaks English, Japanese, Chinese and Korean. Available for web development projects and consulting services."
          key="ogdesc"
        />
        <meta
          property="og:url"
          content="https://jessewei.jp/"
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
      <Header mode="primary" />
      <Main>
        <FirstView />
        <Expertise />
        <Works
          worksData={worksData}
        />
        <Posts
          postsData={postsData}
        />
        <About />
        <Contact />
      </Main>
      <Footer position='absolute' />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context: any) => {
  const worksData = getEntriesData(`${context.locale}/works`)
  const postsData = getEntriesData(`${context.locale}/posts`)
  return {
    props: {
      worksData,
      postsData
    }
  }
}
