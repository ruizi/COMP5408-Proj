const DataGenerator = (
  batchNum: number,
  layers: number,
  layerLength: number
): Array<Array<Array<number>>> => {
  const dataArrays: Array<Array<Array<number>>> = [];
  for (let i = 0; i < batchNum; i++) {
    const dataArray: Array<Array<number>> = [];
    for (let j = 0; j < layers; j++) {
      const arr: Array<number> = [];
      while (arr.length < layerLength) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      dataArray.push(arr.sort((a, b) => a - b));
    }
    dataArrays.push(dataArray);
  }
  return dataArrays;
};

export default DataGenerator;
