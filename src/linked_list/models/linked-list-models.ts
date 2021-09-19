/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line max-classes-per-file
export default class Node<T> {
  private _element: T;

  public next: Node<T> | null;

  constructor(element: T) {
    this._element = element;
    this.next = null;
  }

  get element(): T {
    return this._element;
  }
}

export class DoublyNode<T> extends Node<T> {
    public prev: Node<T> | null;

    constructor(element: T, next: DoublyNode<T> | null = null, prev: DoublyNode<T> | null = null) {
      super(element);
      this.prev = prev;
      this.next = next;
    }
}
