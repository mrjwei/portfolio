import Link from 'next/link'

type PaginationProps = {
  numOfPages: number
  currentPage: number
  handleMovePrev: () => void
  handleMoveNext: () => void
  handleMoveToPage: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type PageNumsProps = {
  numOfPages: number
  handleClick: () => void
}

export const Pagination = ({
  numOfPages,
  currentPage,
  handleMovePrev,
  handleMoveNext,
  handleMoveToPage
}: PaginationProps) => {

  const PageNums = ({numOfPages, handleClick}: PageNumsProps) => {
    const NumComponents = []
    for (let i = 0; i < numOfPages; i++) {
      NumComponents.push(
        <Link href={`/works/page/${i + 1}`}>
          <button
            key={i}
            value={i + 1}
            onClick={handleClick}
          >{i + 1}</button>
        </Link>
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
      <Link href={`${currentPage !== 1 && `/works/page/${currentPage - 1}`}`}>
        <button
          className="w-16 button drop-shadow-xl button-bg-white text-sm px-3 py-1 mr-6"
          disabled={currentPage === 1}
          onClick={handleMovePrev}
        >
          Prev
        </button>
      </Link>
      <PageNums
        numOfPages={numOfPages}
        handleClick={handleMoveToPage}
      />
      <button
          className="w-16 button drop-shadow-xl button-bg-white text-sm px-3 py-1 ml-6"
          disabled={currentPage === numOfPages}
          onClick={handleMoveNext}
        >
          Next
        </button>
    </div>
  )
}

