const BinarySearch = (
  arr,
  target,
  lowIndex = 0,
  highIndex = arr.length - 1
) => {
  //   console.log(
  //     `BinarySearch for ${target} in ${arr} lowIndex: ${lowIndex} highIndex: ${highIndex}`
  //   );
  if (target > arr[highIndex]) {
    return -1; // return -1 if target is greater than the last element in the array which should be the infinite.
  }
  if (target === arr[highIndex]) {
    return highIndex;
  }
  if (target <= arr[lowIndex]) {
    return lowIndex; // return the first one if target is less than the first element in the array.
  }

  if (lowIndex <= highIndex) {
    // get the middle index
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    console.log(`midIndex: ${midIndex}`);
    // if the target is found, return the index
    if (arr[midIndex] === target) {
      return midIndex;
    }
    // if the target is less than the middle element, search the left side
    if (arr[midIndex] > target) {
      console.log(`Searching left side of ${arr[midIndex]}`);
      return BinarySearch(arr, target, lowIndex, midIndex);
    } else {
      console.log(`Searching right side of ${arr[midIndex]}`);
      // if the target is greater than the middle element, search the right side
      return BinarySearch(arr, target, midIndex + 1, highIndex);
    }
  }
  // if the target is not found, return -1
  return lowIndex;
};

export default BinarySearch;
