import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  BsArrowRight
} from 'react-icons/bs'
import {Title} from '../sectionTitle'
import {Button} from '../button';

export const Contact = () => {
  const {t} = useTranslation("top")

  return (
    <div className="w-full bg-red-300 pt-20 pb-48 lg:pt-36 lg:pb-60">
      <div className="container flex flex-col items-center">
        <Title
          label={t("contact.title.main")}
          reverse={true}
          className="text-center mb-24"
        >
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>{t("contact.title.description.1")}</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>{t("contact.title.description.2")}</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>{t("contact.title.description.3")}</span>
        </Title>
        <Button mode='light' className='px-6 py-4 text-2xl mb-12'>
          <Link href="/contact">
            <a className='flex items-center'><span className='mr-3'>{t("contact.button")}</span> <BsArrowRight /></a>
          </Link>
        </Button>
        <p className='text-white text-2xl mb-6'>{t("contact.text")}</p>
        <Button mode='light-text' className='text-2xl'>
          <Link href="mailto:jesseweijapan@gmail.com">
            <a className='flex items-center'>jesseweijapan@gmail.com</a>
          </Link>
        </Button>
      </div>
    </div>
  )
}

