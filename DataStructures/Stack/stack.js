class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }
  pop() {
    if (this.length == 0) return null;

    const poppedItem = this.top;
    this.top = this.top.next;
    this.length--;

    if (this.length === 0) {
      this.bottom = null;
    }

    return poppedItem;
  }
  peek() {
    return this.top;
  }
}
