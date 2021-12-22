import { array1, array2, array3 } from "./data/Arrays";
import BinarySearch from "./algorithms/BinarySearch";
import Solution1 from "./solutions/Solution1";
import Solution2 from "./solutions/Solution2";
import FractionalCascading from "./solutions/FractionalCascading";

const main = () => {
  const target = 4.5;
  const result1 = Solution1([array1, array2, array3], target);
  console.log("result1", result1);
  const result2 = Solution2([array1, array2, array3], target);
  console.log("result2", result2);
  const result3 = FractionalCascading([array1, array2, array3], target);
  console.log("result3", result3);
};
main();
