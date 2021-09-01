export default class Deque<T> {
    private count: number;

    private lowestCount: number;

    private items: { [key: string]: T};

    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }

    addFront(): void {}

    addBack(): void {}

    removeFront(): T | undefined {}

    removeBack(): T | undefined {}
}
