import { performance } from "perf_hooks";
import { NodeForSolution2 } from "../class/NodeForSolution2";
import { MergeSortedArrays } from "../algorithms/MergeArrays";
import BuildUpAuxiliaryArray from "../algorithms/BuildUpAuxiliaryArray";
import * as lodash from "lodash";
import NodeListBinarySearch from "../algorithms/NodeListBinarySearch";
const buildUpNodeList = (
  dataArrays: Array<Array<number>>,
  mergedArray: Array<number>
): Array<NodeForSolution2> => {
  const NodeList: Array<NodeForSolution2> = [];
  let auxiliaryArray: Array<number> = Array(dataArrays.length).fill(Infinity);

  const dataArrayForIterate = lodash.cloneDeep(dataArrays);
  for (let i = mergedArray.length - 1; i >= 0; i--) {
    auxiliaryArray = BuildUpAuxiliaryArray(
      mergedArray[i],
      dataArrayForIterate,
      auxiliaryArray
    );
    const node = new NodeForSolution2(mergedArray[i], auxiliaryArray);
    NodeList.unshift(node);
  }

  return NodeList;
};

const mergeArraysToSingleArray = (
  dataArrays: Array<Array<number>>
): Array<number> => {
  return MergeSortedArrays(lodash.cloneDeep(dataArrays));
};

const SearchingOperator = (
  mergedArray: Array<number>,
  MergedNodeList: Array<NodeForSolution2>,
  target: number,
  layer: number
): Array<number> => {
  const valueIndex = NodeListBinarySearch(MergedNodeList, target);
  if (valueIndex === Infinity) {
    return Array(layer).fill(Infinity);
  }
  const node = MergedNodeList[valueIndex];
  return node.getAuxiliaryArray();
};

export const Solution2 = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  let result: Array<number> = [];
  const mergedArray = mergeArraysToSingleArray(dataArrays);
  const MergedNodeList = buildUpNodeList(dataArrays, mergedArray);
  var startTimeForSolution2 = performance.now();
  result = SearchingOperator(
    mergedArray,
    MergedNodeList,
    target,
    dataArrays.length
  );
  var endTimeForSolution2 = performance.now();
  console.log(
    "Solution2 search time:",
    endTimeForSolution2 - startTimeForSolution2
  );
  return result;
};

export const Solution2Batch = (
  testDataBatch: Array<Array<Array<number>>>,
  target: number
) => {
  let resultBatch: Array<Array<number>> = [];
  let searchTime = 0;
  testDataBatch.forEach((dataArrays) => {
    let result: Array<number> = [];
    const mergedArray = mergeArraysToSingleArray(dataArrays);
    const MergedNodeList = buildUpNodeList(dataArrays, mergedArray);
    var startTimeForSolution2 = performance.now();
    resultBatch.push(
      SearchingOperator(mergedArray, MergedNodeList, target, dataArrays.length)
    );
    var endTimeForSolution2 = performance.now();
    searchTime += endTimeForSolution2 - startTimeForSolution2;
  });
  console.log("Solution2 (batch) Overall Search Time:", searchTime);
  return resultBatch;
};
