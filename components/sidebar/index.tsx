import {WorkDataType, PostDataType} from '../../types'
import {Card} from '../card'

type Props = {
  items: Array<WorkDataType | PostDataType>
}

export const Sidebar = ({items}: Props) => {
  return (
    // <div className='hidden lg:block'>
    //   <h2 className='text-xl'>More {"image" in items[0] ? "Works" : "Posts"}</h2>
    //   <ul>
    //     {items.map((item, index: number) => {
    //       const {itemData} = item
    //       return (
    //         <Card
    //           index={index}
    //           itemData={itemData}
    //         />
    //       )
    //     })}
    //   </ul>
    // </div>
    <div>sidebar</div>
  )
}

