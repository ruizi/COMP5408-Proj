import { performance } from "perf_hooks";
import { NodeForSolution1 } from "../class/NodeForSolution1";
import NodeListBinarySearch from "../algorithms/NodeListBinarySearch";
const initialingNodeList = (
  dataArrays: Array<Array<number>>
): Array<Array<NodeForSolution1>> => {
  const nodeLists: Array<Array<NodeForSolution1>> = [];
  for (let i = 0; i < dataArrays.length; i++) {
    const dataArray = dataArrays[i];
    const nodeList: Array<NodeForSolution1> = [];
    for (let j = 0; j < dataArray.length; j++) {
      const value = dataArray[j];
      nodeList.push(new NodeForSolution1(value));
    }
    nodeLists.push(nodeList);
  }
  return nodeLists;
};
const SearchingOperator = (
  nodeLists: Array<Array<NodeForSolution1>>,
  target: number
): Array<number> => {
  const result: Array<number> = [];
  nodeLists.forEach((dataArray) => {
    const resultIndex = NodeListBinarySearch(dataArray, target);

    if (resultIndex === Infinity) {
      result.push(Infinity);
    } else {
      result.push(dataArray[resultIndex].getValue());
    }
  });
  return result;
};

export const Solution1 = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  let result: Array<number> = [];
  const nodeLists: Array<Array<NodeForSolution1>> =
    initialingNodeList(dataArrays);
  var startTimeForSolution1 = performance.now();
  result = SearchingOperator(nodeLists, target);
  var endTimeForSolution1 = performance.now();
  console.log(
    "Solution1 search time:",
    endTimeForSolution1 - startTimeForSolution1
  );
  return result;
};

export const Solution1Batch = (
  testDataBatch: Array<Array<Array<number>>>,
  target: number
): Array<Array<number>> => {
  let resultBatch: Array<Array<number>> = [];
  let searchTime = 0;
  testDataBatch.forEach((dataArrays) => {
    const nodeLists: Array<Array<NodeForSolution1>> =
      initialingNodeList(dataArrays);

    var startTimeForSolution1 = performance.now();
    resultBatch.push(SearchingOperator(nodeLists, target));
    var endTimeForSolution1 = performance.now();
    searchTime += endTimeForSolution1 - startTimeForSolution1;
  });
  console.log("Solution1 (batch) Overall Search Time:", searchTime);
  return resultBatch;
};
