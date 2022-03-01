import Link from 'next/link'
import {
  BsArrowRight
} from 'react-icons/bs'
import {Title} from '../sectionTitle'
import {Button} from '../button';

export const Contact = () => {
  return (
    <div className="w-full bg-red-300 pt-20 pb-48 lg:pt-36 lg:pb-60">
      <div className="container flex flex-col items-center">
        <Title
          label="Contact"
          reverse={true}
          className="text-center mb-24"
        >
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Wanna Hire Me?</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Got a Question?</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Feel Free to Get in Touch!</span>
        </Title>
        <Button mode='light' className='px-6 py-4 text-2xl mb-12'>
          <Link href="/contact">
            <a className='flex items-center'><span className='mr-3'>Contact Form</span> <BsArrowRight /></a>
          </Link>
        </Button>
        <p className='text-white text-2xl mb-6'>Or via email:</p>
        <Button mode='light-text' className='text-2xl'>
          <Link href="mailto:jesseweijapan@gmail.com">
            <a className='flex items-center'>jesseweijapan@gmail.com</a>
          </Link>
        </Button>
      </div>
    </div>
  )
}

