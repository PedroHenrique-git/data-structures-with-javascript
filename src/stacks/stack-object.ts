interface ItemsProtocol {
    [key: number]: number;
}

export default class StackObject {
  public count: number;

  public items: ItemsProtocol;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(...items: number[]): void {
    items.forEach((item) => {
      this.items[this.count] = item;
      this.count += 1;
    });
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  pop(): number | undefined {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  peek(): number | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) return '';
    let string = `${this.items[0]}`;
    for (let i = 1; i < this.count; i += 1) {
      string = `${string},${this.items[i]}`;
    }
    return string;
  }
}
