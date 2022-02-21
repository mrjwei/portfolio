import {FilterButtonsInterface} from '../../types'
import {FilterButton} from '../filterButton'

export const FilterButtons = ({filters, activeFilterValue}: FilterButtonsInterface) => {
  return (
    <ul className='flex justify-start'>
      {filters.map((filter, index) => {
        const {label, value, handleClick} = filter
        return (
          <li key={index} className='mr-5'>
            <FilterButton
              label={label}
              value={value}
              isActive={activeFilterValue === value}
              handleClick={handleClick}
            />
          </li>
        )
      })}
    </ul>
  )
}

