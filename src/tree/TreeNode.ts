export default class TreeNode<T> {
    public key: T;

    public left: TreeNode<T> | null;

    public right: TreeNode<T> | null;

    constructor(key: T) {
      this.key = key;
    }
}
