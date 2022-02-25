import {WorkDataType, PostDataType} from '../../types'
import {Card} from '../card'

type Props = {
  items: Array<WorkDataType | PostDataType>
}

export const Sidebar = ({items}: Props) => {
  return (
    <div className='hidden lg:block'>
      <h2 className='text-xl mb-8'>You may also like</h2>
      <ul>
        {items.map((item, index: number) => {
          return (
            <li className='mb-12'>
              <Card
                key={index}
                itemData={item}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

