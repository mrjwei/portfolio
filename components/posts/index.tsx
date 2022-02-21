import Link from 'next/link'
import {PostDataType} from '../../types'
import {Title} from '../sectionTitle';
import {Card} from '../card'

type Props = {
  postsData: Array<PostDataType>
}

export const Posts = ({postsData}: Props) => {
  return (
    <div className="w-full bg-mute py-20 lg:py-0 lg:pt-36">
      <div className="container">
        <div className='lg:flex lg:justify-between lg:items-end mb-20'>
          <Title
            label="My Posts"
            reverse={false}
            className="mb-20 lg:mb-0"
          >
            <span className="inline-block relative z-10 after:underbar">I Write About Design,</span><br/>
            <span className='inline-block relative z-10 after:underbar'>Programming and</span><br/>
            <span className='inline-block relative z-10 after:underbar'>Technologies.</span>
          </Title>
          <Link href="/posts">
            <a className='text-red-300 flex items-center'>
              <span className='mr-5'>More Posts</span>
              <img className='w-24' src="/images/global-images/more.svg" alt="" />
            </a>
          </Link>
        </div>
        <ul className='relative lg:after:z-0 lg:after::content-[""] lg:after:block lg:after:w-screen lg:after:calc-h lg:after:bg-red-300 lg:after:absolute lg:after:calc-left lg:after:-bottom-20 lg:grid lg:grid-cols-3 lg:gap-8'>
          {postsData.slice(0, 3).map((postData, index) => {
            return (
              <li className="z-10 h-full transition-transform ease-in-out duration-500 hover:-translate-y-6 mb-12 last:mb-0 lg:mb-0">
                <Card
                  index={index}
                  itemData={postData}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}