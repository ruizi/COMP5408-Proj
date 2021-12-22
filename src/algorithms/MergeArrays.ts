import FCNode from "../class/FCNode";
import * as lodash from "lodash";
import NodeListBinarySearch from "./NodeListBinarySearch";
const MergeTwoSortedArrays = (arr1, arr2) => {
  let sortedArr = []; // the sorted elements will go here

  while (arr1.length && arr2.length) {
    // insert the smallest element to the sortedArr
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...arr1, ...arr2];
};

export const MergeSortedArrays = (dataArrays: Array<Array<number>>) => {
  while (dataArrays.length > 1) {
    const result = [];
    // merge arrays in pairs
    for (let i = 0; i < dataArrays.length; i += 2) {
      const arr1 = dataArrays[i];
      const arr2 = dataArrays[i + 1];

      // a2 can be undefined if arrays.length is odd, so let's do a check
      const mergedPair = arr2 ? MergeTwoSortedArrays(arr1, arr2) : arr1;
      result.push(mergedPair);
    }
    dataArrays = result;
  }

  // handle the case where no arrays is input
  return dataArrays.length === 1 ? dataArrays[0] : [];
};

const MergeHalfUpNodeList2DownNodeList = (
  nodeListUp: Array<FCNode>,
  nodeListDown: Array<FCNode>
) => {
  let sortedNodeList: Array<FCNode> = []; // the sorted node list will go here
  const halfNodeListUp = lodash
    .cloneDeep(nodeListUp)
    .filter((_, index) => index % 2 === 1);

  while (halfNodeListUp.length && nodeListDown.length) {
    // insert the smallest element to the sortedArr
    if (halfNodeListUp[0].getValue() <= nodeListDown[0].getValue()) {
      const newNodeValue = halfNodeListUp[0].getValue();
      const newNodeIndex = sortedNodeList.length;
      const newNodeNextNode = sortedNodeList.length; // need to update this later
      const newNodeUpNode = halfNodeListUp[0].getIndex();

      const newNode = new FCNode(
        newNodeValue,
        newNodeIndex,
        newNodeNextNode,
        newNodeUpNode
      );
      halfNodeListUp.shift();
      sortedNodeList.push(newNode);
    } else {
      const newNodeValue = nodeListDown[0].getValue();
      const newNodeIndex = sortedNodeList.length;
      const newNodeNextNode = sortedNodeList.length;
      const newNode = new FCNode(newNodeValue, newNodeIndex, newNodeNextNode);
      nodeListDown.shift();
      sortedNodeList.push(newNode);
    }
  }
  if (halfNodeListUp.length) {
    for (let i = 0; i < halfNodeListUp.length; i++) {
      const newNodeValue = halfNodeListUp[i].getValue();
      const newNodeIndex = sortedNodeList.length;
      const newNodeNextNode = Infinity;
      const newNodeUpNode = halfNodeListUp[i].getIndex();

      const newNode = new FCNode(
        newNodeValue,
        newNodeIndex,
        newNodeNextNode,
        newNodeUpNode
      );
      sortedNodeList.push(newNode);
    }
  } else {
    for (let i = 0; i < nodeListDown.length; i++) {
      const newNodeValue = nodeListDown[i].getValue();
      const newNodeIndex = sortedNodeList.length;
      const newNodeNextNode = sortedNodeList.length;
      const newNode = new FCNode(newNodeValue, newNodeIndex, newNodeNextNode);
      sortedNodeList.push(newNode);
    }
  }
  let nextNodeIndex = Infinity;
  for (let i = sortedNodeList.length - 1; i >= 0; i--) {
    if (sortedNodeList[i].getUpNode() !== undefined) {
      // if the node has an up node means it is from upper layer
      sortedNodeList[i].setNextNode(nextNodeIndex);
    } else {
      nextNodeIndex = sortedNodeList[i].getIndex();
      // nodeListUp find out the up node
      const upNodeIndex = NodeListBinarySearch(
        nodeListUp,
        sortedNodeList[i].getValue()
      );

      if (upNodeIndex === Infinity) {
        sortedNodeList[i].setUpNode(nodeListUp.length);
      } else {
        sortedNodeList[i].setUpNode(upNodeIndex);
      }
    }
  }

  return sortedNodeList;
};

const addInfinityNodes = (nodeLists: Array<Array<FCNode>>) => {
  for (let i = nodeLists.length - 1; i >= 0; i--) {
    const nodeList = nodeLists[i];
    if (i === nodeLists.length - 1) {
      const infinityNode = new FCNode(
        Infinity,
        nodeList.length,
        nodeList.length
      );
      nodeList.push(infinityNode);
    } else {
      const infinityNode = new FCNode(
        Infinity,
        nodeList.length,
        nodeList.length,
        nodeLists[i + 1].length - 1
      );
      nodeList.push(infinityNode);
    }
  }
};

export const FractionalCascadingNodeListMerge = (
  nodeLists: Array<Array<FCNode>>
) => {
  for (let i = nodeLists.length - 2; i >= 0; i--) {
    const nodeListUp = nodeLists[i + 1];
    const nodeListDown = nodeLists[i];
    const newNodeListDown = MergeHalfUpNodeList2DownNodeList(
      nodeListUp,
      nodeListDown
    );

    nodeLists[i] = newNodeListDown;
  }

  addInfinityNodes(nodeLists);
  return nodeLists;
};
