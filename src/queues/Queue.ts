export default class Queue<T> {
    private items: { [key: string]: T };

    private count: number;

    private lowestCount: number;

    constructor() {
      this.count = 0;
      this.items = {};
      this.lowestCount = 0;
    }

    enqueue(element: T): void {
      this.items[this.count] = element;
      this.count += 1;
    }

    dequeue(): T | undefined {
      if (this.isEmpty()) return undefined;
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount += 1;
      return result;
    }

    isEmpty(): boolean {
      return this.size() === 0;
    }

    size(): number {
      return this.count - this.lowestCount;
    }

    peek(): T | undefined {
      if (this.isEmpty()) return undefined;
      return this.items[this.lowestCount];
    }

    clear(): void {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }

    toString(): string {
      if (this.isEmpty()) return '';
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i += 1) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
}
