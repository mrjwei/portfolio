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
        {items.map((item) => {
          return (
            <li key={item.id} className='mb-12'>
              <Card
                itemData={item}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

