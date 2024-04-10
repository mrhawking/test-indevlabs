export const findMissingNumber = (array: number[]) => {

  //if the array is empty
  if (array.length === 0) {
    return null;
  }

  //getting rid of duplicates
  const uniqueArray = Array.from(new Set(array));

  //sorting the array
  uniqueArray.sort((a, b) => a - b);

  //calculating the difference between pairs of numbers
  for (let i = 0; i < uniqueArray.length - 1; i++) {
    if (uniqueArray[i + 1] - uniqueArray[i] !== 1) {
      return uniqueArray[i] + 1;
    }
  }

  //if there is no missing numbers
  return undefined;
};