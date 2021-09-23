import ValuePair from './ValuePair';

type callableFn<T> = (key: string, value: T) => any;

export default class Dictionary<T> {
    protected table: Record<string, ValuePair<T>>;

    constructor() {
      this.table = {};
    }

    hasKey(key: string): boolean {
      return this.table[key] !== null;
    }

    set(key: string, value: T): boolean {
      if (key !== null && value !== null) {
        this.table[key] = new ValuePair<T>(key, value);
        return true;
      }
      return false;
    }

    remove(key: string):boolean {
      if (this.hasKey(key)) {
        delete this.table[key];
        return true;
      }
      return false;
    }

    get(key: string): T | undefined {
      const valuePair = this.table[key];
      return valuePair.value || undefined;
    }

    keyValues(): ValuePair<T>[] {
      return Object.values(this.table);
    }

    keys(): string[] {
      return Object.keys(this.table);
    }

    values(): T[] {
      return this.keyValues().map((valuePair) => valuePair.value);
    }

    forEach(callBackFn: callableFn<T>): any {
      const valuePairs = this.keyValues();
      for (let i = 0; i < valuePairs.length; i += 1) {
        const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
        if (result === false) break;
      }
    }

    size(): number {
      return Object.keys(this.table).length;
    }

    isEmpty(): boolean {
      return this.size() === 0;
    }

    clear(): void {
      this.table = {};
    }

    toString(): string {
      if (this.isEmpty()) return '';
      const valuePairs = this.keyValues();
      let objString = `${valuePairs[0].toString()}`;
      for (let i = 0; i < valuePairs.length; i += 1) {
        objString = `${objString},${valuePairs[i].toString()}`;
      }
      return objString;
    }
}
