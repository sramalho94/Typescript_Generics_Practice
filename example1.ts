const arr = [55, 99, 77]

function getIndexOfArrayItem<T>(array: T[], arrayItem: T): number {
  return array.findIndex((item) => item === arrayItem)
}

const getIndexOfArrayItemArrow = <T>(array: T[], arrayItem: T): number => {
  return array.findIndex((item) => item === arrayItem)
}


getIndexOfArrayItem(arr, 77)