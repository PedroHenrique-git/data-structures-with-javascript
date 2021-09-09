export default class Node<T> {
  private element: T;

  public next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
