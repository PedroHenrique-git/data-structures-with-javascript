export default class Deque<T> {
    private count: number;

    private lowestCount: number;

    private items: { [key: string]: T};

    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }

    addFront(element: T): void {
      if (this.isEmpty()) {
        this.addBack(element);
      } else if (this.lowestCount > 0) {
        this.lowestCount -= 1;
        this.items[this.lowestCount] = element;
      } else {
        for (let i = this.count; i > 0; i -= 1) {
          this.items[i] = this.items[i - 1];
        }
        this.count += 1;
        this.lowestCount = 0;
        this.items[0] = element;
      }
    }

    addBack(element: T): void {
      this.items[this.count] = element;
      this.count += 1;
    }

    removeFront(): T | undefined {
      if (this.isEmpty()) return undefined;
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount += 1;
      return result;
    }

    removeBack(): T | undefined {
      if (this.isEmpty()) return undefined;
      this.count -= 1;
      const item = this.items[this.count];
      delete this.items[this.count];
      return item;
    }

    peekFront(): T | undefined {
      if (this.isEmpty()) return undefined;
      return this.items[this.lowestCount];
    }

    peekBack(): T | undefined {
      if (this.isEmpty()) return undefined;
      return this.items[this.count - 1];
    }

    isEmpty(): boolean {
      return this.size() === 0;
    }

    size(): number {
      return this.count - this.lowestCount;
    }

    clear(): void {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
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
