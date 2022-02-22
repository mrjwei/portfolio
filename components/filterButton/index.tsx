import {FilterButtonInterface} from '../../types'

export const FilterButton = ({label, value, isActive, handleClick}: FilterButtonInterface) => {
  return (
    <button
      className={`button w-auto drop-shadow-xl text-sm px-3 py-1 mr-6 ${isActive ? "button-bg-white-reverse" : "button-bg-white"}`}
      type="button"
      value={value}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

