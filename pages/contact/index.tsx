import {useState} from 'react'
import Head from 'next/head'
import {Layout} from '../../components/layout'
import {Header} from '../../components/header'
import {Main} from '../../components/main'
import {Form} from '../../components/form'
import {Footer} from '../../components/footer'

const Contact =  () => {
  const [isFormSent, setIsFormSent] = useState(false)

  const handleFormSent = () => {
    setIsFormSent(!isFormSent)
  }

  return (
    <Layout>
      <Head>
        <title>Contact: Jesse Wei</title>
        <meta name="description" content="Contact form of Jesse Wei's Homepage" />
        <link rel="icon" href="/images/global-images/favicon.png" />
      </Head>
      <Header mode="light" />
      <Main className='bg-mute py-36'>
        <Form
          mode="light"
          withBorder
        />
      </Main>
      <Footer position="static" />
    </Layout>
  )
}

export default Contact