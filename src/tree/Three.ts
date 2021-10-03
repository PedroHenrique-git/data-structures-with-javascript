/* eslint-disable no-param-reassign */
import { Compare, defaultCompare, ICompareFunction } from '../utils';
import TreeNode from './TreeNode';

export default class BinarySearchTree<T> {
  public root: TreeNode<T>;

  constructor(key: T, protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.root = new TreeNode<T>(key);
  }

  insert(key: T) {
    if (this.root === null) {
      this.root = new TreeNode<T>(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node: TreeNode<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new TreeNode<T>(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right === null) {
      node.right = new TreeNode<T>(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  inOrderTraverse(callback: CallableFunction) {
    this.inOrderTraverserNode(this.root, callback);
  }

  inOrderTraverserNode(node: TreeNode<T>, callback: CallableFunction) {
    if (node !== null) {
      this.inOrderTraverserNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverserNode(node.right, callback);
    }
  }

  preOrderTraverseNode(node: TreeNode<T>, callback: CallableFunction) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: CallableFunction) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node: TreeNode<T>, callback: CallableFunction) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min(): TreeNode<T> {
    return this.minNode(this.root);
  }

  // eslint-disable-next-line class-methods-use-this
  minNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current !== null && current.left !== null) current = current.left;
    return current;
  }

  max(): TreeNode<T> {
    return this.maxNode(this.root);
  }

  // eslint-disable-next-line class-methods-use-this
  maxNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  search(key: T): boolean {
    return this.searchNode(this.root, key);
  }

  searchNode(node: TreeNode<T>, key: T): boolean {
    if (node === null) return false;
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node: TreeNode<T>, key: T) {
    if (node === null) return null;
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}
