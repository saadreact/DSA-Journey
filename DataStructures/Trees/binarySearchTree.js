class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 *          9
 *      4       20
 *   1    6   15  170
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let pointer = this.root;

    while (true) {
      if (value < pointer.value) {
        if (!pointer.left) {
          pointer.left = newNode;
          break;
        }
        pointer = pointer.left;
      } else {
        if (!pointer.right) {
          pointer.right = newNode;
          break;
        }
        pointer = pointer.right;
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;

    let pointer = this.root;
    while (true) {
      if (value === pointer.value) return pointer;

      if (value < pointer.value) {
        if (!pointer.left) return false;
        pointer = pointer.left;
      } else {
        if (!pointer.right) return false;
        pointer = pointer.right;
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();

      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

}

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
// //     9
// //  4     20
// //1  6  15  170
// [9, 4, 1, 6, 20, 15, 170]
// BFS [9, 4, 20, 1, 6, 15, 170]
// console.log(tree.breadthFirstSearch());

export function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
