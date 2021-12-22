import { array1, array2, array3 } from "./data/Arrays";
import Solution1 from "./solutions/Solution1";
import Solution2 from "./solutions/Solution2";
import FractionalCascading from "./solutions/FractionalCascading";
import { performance } from "perf_hooks";

const main = () => {
  const target = 0;
  var startTimeForSolution1 = performance.now();
  const result1 = Solution1([array1, array2, array3], target);
  console.log("result1", result1);
  var endTimeForSolution1 = performance.now();

  var startTimeForSolution2 = performance.now();
  const result2 = Solution2([array1, array2, array3], target);
  console.log("result2", result2);
  var endTimeForSolution2 = performance.now();

  var startTimeForSolution3 = performance.now();
  const result3 = FractionalCascading([array1, array2, array3], target);
  console.log("result3", result3);
  var endTimeForSolution3 = performance.now();

  console.log("Solution1:", endTimeForSolution1 - startTimeForSolution1);
  console.log("Solution2:", endTimeForSolution2 - startTimeForSolution2);
  console.log("Solution3:", endTimeForSolution3 - startTimeForSolution3);
};
main();
