import {FilterButtonInterface} from '../../types'

export const FilterButton = ({label, value, isActive, handleClick}: FilterButtonInterface) => {
  return (
    <button
      className={`button drop-shadow-xl button-bg-white text-sm px-3 py-1 ${isActive && "button-bg-white-reverse"}`}
      type="button"
      value={value}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

