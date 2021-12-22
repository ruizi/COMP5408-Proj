const NodeListBinarySearch = (
  arr,
  target,
  lowIndex = 0,
  highIndex = arr.length - 1
) => {
  if (target > arr[highIndex].getValue()) {
    return Infinity; // return -1 if target is greater than the last element in the array which should be the infinite.
  }
  if (target === arr[highIndex].getValue()) {
    return highIndex;
  }
  if (target <= arr[lowIndex].getValue()) {
    return lowIndex; // return the first one if target is less than the first element in the array.
  }
  if (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    // console.log(`midIndex: ${midIndex}`);
    if (arr[midIndex].getValue() === target) {
      return midIndex;
    }
    // if the target is less than the middle element, search the left side
    if (arr[midIndex].getValue() > target) {
      // console.log(`Searching left side of ${arr[midIndex].getValue()}`);
      return NodeListBinarySearch(arr, target, lowIndex, midIndex);
    } else {
      // console.log(`Searching right side of ${arr[midIndex].getValue()}`);
      return NodeListBinarySearch(arr, target, midIndex + 1, highIndex);
    }
  }
};

export default NodeListBinarySearch;
