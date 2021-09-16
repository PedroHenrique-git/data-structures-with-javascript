import Node from './models/linked-list-models';
import defaultEquals from './utils/default-equals';

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

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next;
      } else {
        let previous: Node<T> | null = null;
        for (let i = 0; i < index; i += 1) {
          previous = current!;
          current = current!.next;
        }
        previous!.next = current!.next;
        this.count -= 1;
        return current!.element;
      }
    }
    return undefined;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i += 1) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}
