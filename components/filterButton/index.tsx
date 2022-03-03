import {FilterButtonInterface} from '../../types'

export const FilterButton = ({label, value, isActive, handleClick}: FilterButtonInterface) => {
  return (
    <button
      className={`button w-auto drop-shadow-button text-sm px-3 py-1 mr-6 ${isActive ? "button-bg-white-reverse border-0" : "button-bg-white border-0"}`}
      type="button"
      value={value}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

