// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
  constructor(value, parentNode = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parentNode;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value, currNode = this.root) {
    let newNode;
    if (!value instanceof TreeNode) {
      newNode = new TreeNode(value);
    } else {
      newNode = value;
    }
    if (!currNode) {
      currNode = newNode;
      this.root = currNode;
      return;
    }
    while (currNode) {
      if (currNode.value > newNode.value && !currNode.left) {
        currNode.left = newNode;
        currNode = currNode.left;
        return;
      }

      else if (currNode.value > newNode.value && currNode.left) {
        currNode = currNode.left;
      }

      else if (currNode.value < newNode.value && !currNode.right) {
        currNode.right = newNode;
        currNode = currNode.right;
        return;
      }

      else if (currNode.value < newNode.value && currNode.right) {
        currNode = currNode.right;
      }
    }
  }

  search(value, currNode = this.root) {
    while (currNode) {
      if (currNode.value === value) return true;

      if (currNode.value > value) {
        currNode = currNode.left
      }

      else if (currNode.value < value) {
        currNode = currNode.right
      }
    }
    return false;
  }


  preOrderTraversal(currNode = this.root) {
    // Check the base case
    if (!currNode) return currNode.value;

    // print the current Node BEFORE recursion
    console.log(currNode.value);
    this.preOrderTraversal(currNode.left);
    this.preOrderTraversal(currNode.right);
  }


  inOrderTraversal(currNode = this.root) {
    // Check the base case
    if (!currNode) return;

    // print the current Node IN BETWEEN recursion
    this.inOrderTraversal(currNode.left);
    console.log(currNode.value);
    this.inOrderTraversal(currNode.right);
  }


  postOrderTraversal(currNode = this.root) {
    // Check the base case
    if (!currNode) return;

    // print the current Node IN BETWEEN recursion
    this.postOrderTraversal(currNode.left);
    this.postOrderTraversal(currNode.right);
    console.log(currNode.value);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [this.root]
    let removed;
    while (queue.length) {
      removed = queue.shift()
      console.log(removed.value);
      if (removed.left) {
        queue.push(removed.left)
      }
      if (removed.right) {
        queue.push(removed.right)
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root]
    let removed;
    while (stack.length) {
      removed = stack.pop()
      console.log(removed.value);
      if (removed.left) stack.push(removed.left);
      if (removed.right) stack.push(removed.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode }