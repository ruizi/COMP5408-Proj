import BinarySearch from "../algorithms/BinarySearch";

const Solution1 = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  const result: Array<number> = [];
  dataArrays.forEach((dataArray) => {
    console.log(`Searching for ${target} in ${dataArray}`);
    const resultIndex = BinarySearch(
      dataArray,
      target,
      0,
      dataArray.length - 1
    );
    console.log(dataArray[resultIndex]);
    if (resultIndex === -1) {
      result.push(Infinity);
    } else {
      result.push(dataArray[resultIndex]);
    }
  });
  return result;
};
export default Solution1;
