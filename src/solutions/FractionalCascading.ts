import { performance } from "perf_hooks";
import { FractionalCascadingNodeListMerge } from "../algorithms/MergeArrays";
import NodeListBinarySearch from "../algorithms/NodeListBinarySearch";
import FCNode from "../class/FCNode";
const initialingNodeList = (
  dataArrays: Array<Array<number>>
): Array<Array<FCNode>> => {
  const NodeLists: Array<Array<FCNode>> = [];
  for (let i = 0; i < dataArrays.length; i++) {
    const dataArray = dataArrays[i];
    const NodeList: Array<FCNode> = [];
    for (let j = 0; j < dataArray.length; j++) {
      const value = dataArray[j];
      NodeList.push(new FCNode(value, j, j));
    }
    NodeLists.push(NodeList);
  }
  return NodeLists;
};

const SearchingOperator = (
  mergedNodeLists: Array<Array<FCNode>>,
  target: number
): Array<number> => {
  const result = [];
  let startPointIndex = NodeListBinarySearch(mergedNodeLists[0], target);

  let layer = 0;
  while (layer <= mergedNodeLists.length - 1) {
    if (
      layer !== 0 &&
      startPointIndex !== 0 &&
      mergedNodeLists[layer][startPointIndex - 1].getValue() >= target
    ) {
      startPointIndex = mergedNodeLists[layer][startPointIndex - 1].getIndex();
    }

    const ResIndex = mergedNodeLists[layer][startPointIndex].getNextNode();

    if (mergedNodeLists[layer][ResIndex].getNextNode() === Infinity) {
      result.push(Infinity);
    } else {
      result.push(mergedNodeLists[layer][ResIndex].getValue());
    }

    startPointIndex = mergedNodeLists[layer][startPointIndex].getUpNode();

    layer++;
  }

  return result;
};

export const FractionalCascading = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  let result: Array<number> = [];
  const NodeLists: Array<Array<FCNode>> = initialingNodeList(dataArrays);
  const mergedNodeLists = FractionalCascadingNodeListMerge(NodeLists);
  var startTimeForSolution3 = performance.now();
  result = SearchingOperator(mergedNodeLists, target);
  var endTimeForSolution3 = performance.now();
  console.log(
    "Solution3 search time:",
    endTimeForSolution3 - startTimeForSolution3
  );
  return result;
};

export const FractionalCascadingBatch = (
  testDataBatch: Array<Array<Array<number>>>,
  target: number
): Array<Array<number>> => {
  let resultBatch: Array<Array<number>> = [];
  let searchTime = 0;
  testDataBatch.forEach((dataArrays) => {
    const NodeLists: Array<Array<FCNode>> = initialingNodeList(dataArrays);
    const mergedNodeLists = FractionalCascadingNodeListMerge(NodeLists);
    var startTimeForSolution3 = performance.now();
    resultBatch.push(SearchingOperator(mergedNodeLists, target));
    var endTimeForSolution3 = performance.now();
    searchTime += endTimeForSolution3 - startTimeForSolution3;
  });
  console.log("Solution3 (batch) Overall Search Time:", searchTime);
  return resultBatch;
};
