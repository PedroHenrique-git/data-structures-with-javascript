import LinkedList from './LinkedList';
import { DoublyNode } from './models/linked-list-models';
import defaultEquals from './utils/default-equals';

export default class DoublyLinkedList<T> extends LinkedList<T> {
  protected tail: DoublyNode<T> | null;

  protected head: DoublyNode<T> | null

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = null;
    this.head = null;
  }

  insert(element: T, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          if (current) current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        if (current) current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        if (previous) {
          current = previous.next;
          node.next = current;
          previous.next = node;
          current?.prev = node;
          node.prev = previous;
        }
      }
      this.count += 1;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = this.head?.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head?.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current?.prev;
        this.tail?.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current?.prev;
        previous?.next = current?.next;
        current?.next.prev = previous;
      }
      this.count -= 1;
      return current?.element;
    }
    return undefined;
  }
}
