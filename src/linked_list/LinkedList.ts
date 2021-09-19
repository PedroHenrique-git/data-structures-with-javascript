import Node from './models/linked-list-models';
import defaultEquals from './utils/default-equals';

export default class LinkedList<T> {
  protected count: number;

  protected head: Node<T> | null;

  protected equalsFn: (a: T, b: T) => boolean;

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
        const previous = this.getElementAt(index - 1);
        if (previous) {
          current = previous.next;

          if (current) {
            previous.next = current.next;
          }
        }
      }
      this.count -= 1;
      return current?.element;
    }
    return undefined;
  }

  getElementAt(index: number): Node<T> | null | undefined {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i += 1) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index < this.count) {
      const node = new Node<T>(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let current = null;
        const previous = this.getElementAt(index - 1);
        node.next = current;
        if (previous) {
          current = previous.next;
          previous.next = node;
        }
      }
      this.count += 1;
      return true;
    }
    return false;
  }

  indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i += 1) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  getHead(): Node<T> | null {
    return this.head;
  }

  toString(): string {
    if (this.head === null) return '';
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== null; i += 1) {
      objString += `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
