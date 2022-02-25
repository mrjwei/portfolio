import Head from 'next/head'
import {Layout} from '../../components/layout'
import {Header} from '../../components/header'
import {Main} from '../../components/main'
import {Form} from '../../components/form'
import {Footer} from '../../components/footer'

const Contact =  () => {
  return (
    <Layout>
      <Head>
        <title>Contact: Jesse Wei</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <Main className='bg-white py-36'>
        <div className="container lg:grid lg:grid-cols-2">
          <div>
            <h2 className='mb-8'>Contact.</h2>
            <p className='text-xl mb-14 lg:mb-0'>
              Whether you&apos;re interested in hiring me<br/>
              or you&apos;ve got a question to ask,<br/>
              feel free to get in touch!
            </p>
          </div>
          <Form
            mode="light"
            withBorder={true}
          />
        </div>
      </Main>
      <Footer position="static" />
    </Layout>
  )
}

export default Contact