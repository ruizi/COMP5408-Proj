const BuildUpAuxiliaryArray = (
  iterateValue: number,
  dataArrays: Array<Array<number>>,
  previousAuxiliaryArray: Array<number> = []
) => {
  const newAuxiliaryArray = [...previousAuxiliaryArray];
  for (let i = 0; i < dataArrays.length; i++) {
    const dataArray = dataArrays[i];

    let lastElement = dataArray.slice(-1);

    if (lastElement[0] === iterateValue) {
      dataArray.pop();
      newAuxiliaryArray[i] = iterateValue;
    }
  }
  return newAuxiliaryArray;
};

export default BuildUpAuxiliaryArray;
