class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const currentNode = this.traverseToIndex(index - 1);

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;
  }

  delete(index) {
    if (index === this.length - 1) {
      const currentNode = this.traverseToIndex(index - 1);
      currentNode.next = null;
      this.tail = currentNode;
      this.length--;
      return;
    }

    const currentNode = this.traverseToIndex(index - 1);
    const toBeRemovedNode = currentNode.next;
    currentNode.next = toBeRemovedNode.next;
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      if (i === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  printList() {
    let currentitem = this.head;
    const arr = [];
    while (currentitem !== null) {
      arr.push(currentitem.value);
      currentitem = currentitem.next;
    }
    console.log(arr);
  }
}

const linkedList = new LinkedList(2);
linkedList.append(12);
linkedList.append(5);

linkedList.printList();

linkedList.prepend(1);
linkedList.prepend(0);

linkedList.printList();

linkedList.insert(3, 3);

linkedList.printList();

linkedList.delete(3);
linkedList.printList();

linkedList.delete(4);
linkedList.printList();

console.log(linkedList);
