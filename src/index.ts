import { array1, array2, array3 } from "./data/Arrays";
import { Solution1, Solution1Batch } from "./solutions/Solution1";
import { Solution2, Solution2Batch } from "./solutions/Solution2";
import {
  FractionalCascading,
  FractionalCascadingBatch,
} from "./solutions/FractionalCascading";

import DataGenerator from "./data/DataGenerator";

const experimentMode = () => {
  const target = 0;
  const result1 = Solution1([array1, array2, array3], target);
  const result2 = Solution2([array1, array2, array3], target);
  const result3 = FractionalCascading([array1, array2, array3], target);
  console.log("Solution 1 result: ", result1);
  console.log("Solution 2 result: ", result2);
  console.log("Solution 3 result: ", result3);
};

const batchTestingMode = () => {
  const target = 10;
  //const testData: Array<Array<Array<number>>> = DataGenerator(20, 5, 10);
  const testData: Array<Array<Array<number>>> = DataGenerator(20, 5, 10);
  console.log("testData", testData);

  const solution1ResultInBatch: Array<Array<number>> = Solution1Batch(
    testData,
    target
  );

  const solution2ResultInBatch: Array<Array<number>> = Solution2Batch(
    testData,
    target
  );

  const solution3ResultInBatch: Array<Array<number>> = FractionalCascadingBatch(
    testData,
    target
  );

  console.log("Solution 1 result in batch:", solution1ResultInBatch);
  console.log("Solution 2 result in batch:", solution2ResultInBatch);
  console.log("Solution 3 result in batch:", solution3ResultInBatch);
};

const main = () => {
  // experimentMode();
  batchTestingMode();
};
main();
