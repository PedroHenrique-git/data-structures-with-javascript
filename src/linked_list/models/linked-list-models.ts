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
