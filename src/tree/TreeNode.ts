export default class TreeNode<T> {
    public key: T;

    public left: TreeNode<T>;

    public right: TreeNode<T>;

    constructor(key: T) {
      this.key = key;
    }
}
