class FCNode {
  value: number;
  index: number;
  layer: number;
  upNode: number;
  nextNode: number;

  constructor(value, index, nextNode, upNode?) {
    this.value = value;
    this.index = index;
    this.nextNode = nextNode;
    this.upNode = upNode;
  }
  getValue = (): number => {
    return this.value;
  };
  getIndex = (): number => {
    return this.index;
  };
  getUpNode = (): number | undefined => {
    return this.upNode;
  };
  getNextNode = (): number => {
    return this.nextNode;
  };

  setUpNode = (upNode: number) => {
    this.upNode = upNode;
  };
  setNextNode = (nextNode: number) => {
    this.nextNode = nextNode;
  };
}
export default FCNode;
