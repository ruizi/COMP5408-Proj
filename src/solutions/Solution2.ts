import { NodeForSolution2 } from "../class/NodeForSolution2";
import { MergeSortedArrays } from "../algorithms/MergeArrays";
import BuildUpAuxiliaryArray from "../algorithms/BuildUpAuxiliaryArray";
import * as lodash from "lodash";
import BinarySearch from "../algorithms/BinarySearch";
const buildUpNodeList = (
  dataArrays: Array<Array<number>>,
  mergedArray: Array<number>
): Array<NodeForSolution2> => {
  const NodeList: Array<NodeForSolution2> = [];
  let auxiliaryArray: Array<number> = Array(dataArrays.length).fill(Infinity);
  console.log(auxiliaryArray);
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
  //console.log(NodeList);
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
  target: number
): Array<number> => {
  const valueIndex = BinarySearch(mergedArray, target);
  //   console.log("valueIndex", valueIndex);
  //   console.log("value", mergedArray[valueIndex]);
  const node = MergedNodeList[valueIndex];
  return node.getAuxiliaryArray();
};

const Solution2 = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  const result: Array<number> = [];
  const mergedArray = mergeArraysToSingleArray(dataArrays);
  const MergedNodeList = buildUpNodeList(dataArrays, mergedArray);
  return SearchingOperator(mergedArray, MergedNodeList, target);
};

export default Solution2;
