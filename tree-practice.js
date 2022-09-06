const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder



// Practice problems on binary trees

function findMinBST(rootNode) {
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.value;
}

function findMaxBST(rootNode) {
  while (rootNode.right) {
    rootNode = rootNode.right;
  }
  return rootNode.value;
}

function findMinBT(rootNode) {
  let queue = [rootNode]
  let min = rootNode.value;
  let removed;
  while (queue.length) {
    removed = queue.shift()
    if (removed.value <= min) min = removed.value;
    if (removed.left) {
      queue.push(removed.left)
    }
    if (removed.right) {
      queue.push(removed.right)
    }
  }
  return min;
}

function findMaxBT(rootNode) {
  let queue = [rootNode];
  let max = rootNode.value;
  let removed;
  while (queue.length) {
    removed = queue.shift()
    if (removed.value >= max) max = removed.value;
    if (removed.left) {
      queue.push(removed.left)
    }
    if (removed.right) {
      queue.push(removed.right)
    }
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;

  let height = 1;

  height += Math.max(getHeight(rootNode.left), getHeight(rootNode.right));

  return height;
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  let nodeCount = 1;

  nodeCount = nodeCount + countNodes(rootNode.left) + countNodes(rootNode.right);

  return nodeCount;
}

function balancedTree(rootNode) {
  let height = getHeight(rootNode) + 1;
  let nodeCount = Math.log2(countNodes(rootNode) + 1);

  return height === nodeCount ? true : false;
}

function getParentNode(rootNode, target) {
  if (rootNode.value === target) return null;

  let queue = [rootNode];

  while (queue.length) {
    let removed = queue.shift()

    if (removed.left) {
      if (removed.left.value === target) return removed;
      queue.push(removed.left);
    }

    if (removed.right) {
      if (removed.right.value === target) return removed;
      queue.push(removed.right);
    }
  }
  return undefined;
}


function inOrderPredecessor(rootNode, target) {
  if (findMinBT(rootNode) === target) return null;
  let bst = new BinarySearchTree();
  bst.insert(rootNode);
  for (let i = target - 1; i > 0; i--) {
    if (bst.search(i)) return i;
  }
}


function deleteNodeBST(rootNode, target) {

  // Do a traversal to find the node. Keep track of the parent
  let stack = [rootNode]
    , parent;
  while (stack.length) {
    parent = stack.shift();
    if (parent.right) {
      stack.push(parent.right);
      if (parent.right.value === target) {
        return deleter(parent, parent.right);
      }
    } if (parent.left) {
      stack.push(parent.left);
      if (parent.left.value === target) {
        parent.left;
        return deleter(parent, parent.left)
      }
    }
  }
  return undefined;

  // Undefined if the target cannot be found

  // Set target based on parent;

  // Case 1: Zero children:

  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

function deleter(parent, target) {
  if (!target.left && !target.right) {
    parent.left === target ? parent.left = null : parent.right = null;
  } else if (target.left && !target.right) {
    parent.left === target ? parent.left = target.right : parent.right = target.right;
  } else if (!target.left && target.right) {
    parent.right === target ? parent.right = target.right : parent.left = target.right;
  } else if (target.left && target.right) {
  }
  return parent;
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}