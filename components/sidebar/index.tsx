import {WorkDataType, PostDataType} from '../../types'
import {Card} from '../card'

type Props = {
  entries: Array<WorkDataType | PostDataType>
}

export const Sidebar = ({entries}: Props) => {
  return (
    <div className='hidden lg:block'>
      <h2 className='text-xl mb-8'>You may also like</h2>
      <ul>
        {entries.map((entry) => {
          return (
            <li key={entry.id} className='mb-12 drop-shadow-card'>
              <Card
                entryData={entry}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

