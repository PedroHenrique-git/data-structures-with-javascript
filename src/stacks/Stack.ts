/* eslint-disable no-useless-constructor */

export default class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(...item: T[]) {
    this.items.push(...item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    while (this.items.length !== 0) this.items.pop();
  }
}
