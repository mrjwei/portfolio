export const Pagination = ({numOfPages}: {numOfPages: number}) => {
  const PageNums = ({numOfPages}: {numOfPages: number}) => {
    const NumComponents = []
    for (let i = 0; i < numOfPages; i++) {
      NumComponents.push(
        <p key={i}>{i + 1}</p>
      )
    }
    return (
      <div className="flex">
        {NumComponents}
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <button
        className="w-16 button drop-shadow-xl button-bg-white text-sm px-3 py-1"
        type="button"
      >
        Prev
      </button>
      <PageNums numOfPages={numOfPages} />
      <button
        className="w-16 button drop-shadow-xl button-bg-white text-sm px-3 py-1"
        type="button"
      >
        Next
      </button>
    </div>
  )
}

