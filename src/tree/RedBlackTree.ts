import {
    Colors, Compare, defaultCompare, ICompareFunction
} from '../utils';
import RedBlackNodeTree from './RedBlackNode';
import BinarySearchTree from './Three';

export default class RedBlackTree<T> extends BinarySearchTree<T> {
  constructor(key: T, protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(key, compareFn);
    this.compareFn = compareFn;
  }

  insert(key: T) {
    if (this.root === null) {
      this.root = new RedBlackNodeTree<T>(key);
      this.root.color = Colors.black;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node: RedBlackNodeTree<T>, key: T) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new RedBlackNodeTree<T>(key);
        node.left.parent = node;
        return node.left;
      }
      return this.insertNode(node.left, key);
    }

    if (node.right === null) {
      node.right = new RedBlackNodeTree<T>(key);
      node.right.parent = node;
      return node.right;
    }

    return this.insertNode(node.right, key);
  }

  fixTreeProperties(node: RedBlackNodeTree<T>) {
    while (node && node.parent && node.isRed() && node.color !== Colors.BLACK) {
      const { parent } = node;
      const grandParent = parent.parent;
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else if (node === parent.right) {
          this.rotationRR(parent);
          node = parent;
          parent = node.parent;
        }
        this.rotationLL(grandParent);
        parent.color = Colors.BLACK;
        grandParent.color = Colors.RED;
        node = parent;
      } else {
        const uncle = grandParent?.left;
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          this.rotationRR(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  rotationLL(node: RedBlackNodeTree<T>) {
    const tmp = node.left;
    node.left = tmp?.right;
    if (tmp?.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp?.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
    tmp?.right = node;
    node.parent = tmp;
  }

  rotationRR(node: RedBlackNodeTree<T>) {
    const tmp = node.right;
    node.right = tmp?.left;
    if (tmp?.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp?.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }
    tmp?.left = node;
    node.parent = tmp;
  }
}
