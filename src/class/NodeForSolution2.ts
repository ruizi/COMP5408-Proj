export class NodeForSolution2 {
  value: number;
  auxiliaryArray: Array<number>;

  constructor(value, auxiliaryArray) {
    this.value = value;
    this.auxiliaryArray = auxiliaryArray;
  }
  getValue = (): number => {
    return this.value;
  };

  getAuxiliaryArray = (): Array<number> => {
    return this.auxiliaryArray;
  };
}
