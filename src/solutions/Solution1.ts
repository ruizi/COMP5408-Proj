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

const Solution1 = (
  dataArrays: Array<Array<number>>,
  target: number
): Array<number> => {
  const result: Array<number> = [];
  const nodeLists: Array<Array<NodeForSolution1>> =
    initialingNodeList(dataArrays);
  return SearchingOperator(nodeLists, target);
};
export default Solution1;
