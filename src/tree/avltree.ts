import { Compare, defaultCompare, ICompareFunction } from '../utils';
import BinarySearchTree from './Three';
import TreeNode from './TreeNode';

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5
}

export default class AVLTree<T> extends BinarySearchTree<T> {
  constructor(key: T, protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(key, compareFn);
    this.compareFn = compareFn;
  }

  getNodeHeight(node: TreeNode<T>): number {
    if (node === null) return -1;
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node: TreeNode<T>): number {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  rotationLL(node: TreeNode<T>) {
    const tmp = node.left;
    node.left = tmp?.right;
    tmp?.right = node;
    return tmp;
  }

  // eslint-disable-next-line class-methods-use-this
  rotationRR(node: TreeNode<T>) {
    const tmp = node.right;
    node.right = tmp?.left;
    tmp?.left = node;
    return tmp;
  }

  rotationLR(node: TreeNode<T>) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL;
  }

  rotationRL(node: TreeNode<T>) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(key: T) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node: TreeNode<T>, key: T) {
    if (node === null) return new Node(key);

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left?.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right?.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }

    return node;
  }

  removeNode(node: TreeNode<T>, key: T) {
    node = super.removeNode(node, key);
    if (node === null) return node;

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const BalanceFactorLeft = this.getBalanceFactor(node.left);
      if (balanceFactor === BalanceFactor.BALANCED || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node);
      }
      if (balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left);
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
