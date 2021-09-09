import defaultEquals from './utils/default-equals';
import Node from './models/linked-list-models';

export default class LinkedList<T> {
  private count: number;

  private head: Node<T> | null;

  private equalsFn: (a: T, b: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element: T) {
    const node = new Node<T>(element);
    let current: Node<T>;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count += 1;
  }
}
