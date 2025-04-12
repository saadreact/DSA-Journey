class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
  dequeue() {
    if (this.length == 0) return null;

    const poppedItem = this.first.value;
    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }
    return poppedItem;
  }
  peek() {
    return this.first;
  }
}
