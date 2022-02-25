export const areSimilar = <T extends unknown>(arr1: Array<T>, arr2: Array<T>) => {
  return arr1.some(item => arr2.includes(item))
}

export const getNumOfPages = (numOfTotalItems: number, numOfItemsPerPage: number): number => {
  let numOfPages = 0
  let numOfItemsLeft = numOfTotalItems

  while (true) {
    const quotient = Math.floor(numOfItemsLeft / numOfItemsPerPage)
    const remainder = numOfItemsLeft % numOfItemsPerPage
    if (quotient === 0) {
      if (remainder > 0) {
        numOfPages = numOfPages + 1
      }
      break
    } else {
      numOfPages = numOfPages + quotient
      numOfItemsLeft = remainder
      continue
    }
  }

  return numOfPages
}

