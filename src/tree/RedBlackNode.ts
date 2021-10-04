import { Colors } from '../utils';
import TreeNode from './TreeNode';

export default class RedBlackNodeTree<T> extends TreeNode<T> {
  public color: string = Colors.RED;

  public parent: RedBlackNodeTree<T> | null;

  declare public left: RedBlackNodeTree<T> | null;

  declare public right: RedBlackNodeTree<T> | null;

  constructor(key: T) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
