import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import {WorkDataType} from '../../types'
import {Title} from '../sectionTitle';
import {Card} from '../card'

type Props = {
  worksData: Array<WorkDataType>
}

export const Works = ({worksData}: Props) => {
  const {t} = useTranslation("top")

  return (
    <div className="w-full bg-red-100 py-20 lg:py-36">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Title
            label={t("works.title.main")}
            reverse={false}
            className="mb-16 lg:mb-32"
          >
            <span className='inline-block relative z-10 after:underbar after:bg-white'>{t("works.title.description.1")}</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>{t("works.title.description.2")}</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>{t("works.title.description.3")}</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>{t("works.title.description.4")}</span>
          </Title>
          <Link href="/works">
            <a className='text-red-300 flex items-center mb-16 lg:mb-0'>
              <span className='mr-5'>{t("works.button")}</span>
              <div className='w-24 relative'>
                <Image src="/images/global-images/more.svg" alt="more button" width={137} height={95} layout='responsive' />
              </div>
            </a>
          </Link>
        </div>
        <ul>
          {worksData.slice(0, 2).map((workData, index) => {
            return (
              <li key={index} className='flex justify-start relative last:mt-12 lg:last:mt-16 lg:justify-center lg:last:-left-16'>
                <Card
                  entryData={workData}
                  wrapperClassName="w-full lg:w-80"
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}