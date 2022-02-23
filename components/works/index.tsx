import Link from 'next/link'
import Image from 'next/image'
import {WorkDataType} from '../../types'
import {Title} from '../sectionTitle';
import {Card} from '../card'

type Props = {
  worksData: Array<WorkDataType>
}

export const Works = ({worksData}: Props) => {
  return (
    <div className="w-full bg-red-100 py-20 lg:py-36">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Title
            label="My Works"
            reverse={false}
            className="mb-16 lg:mb-32"
          >
            <span className='inline-block relative z-10 after:underbar after:bg-white'>Websites.</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>Web Apps.</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>Graphic Works.</span><br />
            <span className='inline-block relative z-10 after:underbar after:bg-white'>And Many More.</span>
          </Title>
          <Link href="/works">
            <a className='text-red-300 flex items-center mb-16 lg:mb-0'>
              <span className='mr-5'>More Works</span>
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
                  itemData={workData}
                  wrapperClassName="w-full lg:w-auto"
                  cardClassName=''
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}