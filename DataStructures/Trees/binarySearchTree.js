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

  breadthFirstSearchR(queue, list) {
    //  create base case to stop
    if (!queue.length) return list;

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearch(queue, list);
  }

  DFSInorder() {
    return traverseInOrder(this.root, []);
  }

  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }

  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}

//     9
//  4     20
//1  6  15  170

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value);

  return list;
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

// DFS - Inorder - [1, 4, 6, 9 , 15, 20 ,170]
// DFS - Pre order - [9, 4, 1, 6, 20, 170, 15]
// DFS - Post order - [1, 6, 4, 15, 170, 20, 9]

// console.log(tree.breadthFirstSearch());

export function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
