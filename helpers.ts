// function declaration
function convertToArray<T>(input: T): T[]{
  return [input]
}

// arrow function
const convertToArrayArrow = <T>(input: T): T[] => {
  return [input]
}