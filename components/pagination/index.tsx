import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

type PaginationProps = {
  numOfPages: number
  currentPage: number
  handleMovePrev: () => void
  handleMoveNext: () => void
  handleMoveToPage: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type PageNumsProps = {
  numOfPages: number
  currentPage: number
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Pagination = ({
  numOfPages,
  currentPage,
  handleMovePrev,
  handleMoveNext,
  handleMoveToPage
}: PaginationProps) => {
  const PageNums = ({numOfPages, currentPage, handleClick}: PageNumsProps) => {
    const NumComponents = []
    for (let i = 0; i < numOfPages; i++) {
      NumComponents.push(
        <button
          className={`mx-3 ${currentPage === i + 1 ? "text-red-300 font-bold" : "text-red-200"}`}
          key={i}
          value={i + 1}
          onClick={handleClick}
        >{i + 1}</button>
      )
    }
    return (
      <div className="flex">
        {NumComponents}
      </div>
    )
  }

  const {t} = useTranslation("common")

  return (
    <div className="flex justify-center">
      <button
          className="w-16 button drop-shadow-button button-bg-white text-sm px-3 py-1 mr-6"
          disabled={currentPage === 1}
          onClick={handleMovePrev}
        >
          {t("pagination.prevButton")}
      </button>
      <PageNums
        numOfPages={numOfPages}
        currentPage={currentPage}
        handleClick={handleMoveToPage}
      />
      <button
          className="w-16 button drop-shadow-button button-bg-white text-sm px-3 py-1 ml-6"
          disabled={currentPage === numOfPages}
          onClick={handleMoveNext}
        >
          {t("pagination.nextButton")}
        </button>
    </div>
  )
}

