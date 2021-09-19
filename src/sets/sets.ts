export default class MySet<T> {
    public items: { [ key: string ]: T}

    constructor() {
      this.items = {};
    }

    has(item: T): boolean {
      // eslint-disable-next-line no-prototype-builtins
      return this.items.hasOwnProperty(String(item));
    }

    add(item: T): boolean {
      if (!this.has(item)) {
        this.items[String(item)] = item;
        return true;
      }
      return false;
    }

    delete(item: T): boolean {
      if (!this.has(item)) return false;
      delete this.items[String(item)];
      return true;
    }

    clear(): void {
      this.items = {};
    }

    size(): number {
      return Object.keys(this.items).length;
    }

    values(): T[] {
      return Object.values(this.items);
    }

    union(otherSet: MySet<T>) {
      const union = new MySet<T>();
      this.values().forEach((value) => union.add(value));
      otherSet.values().forEach((value) => union.add(value));
      return union;
    }

    /* intersection(otherSet: MySet<T>) {
      const intersectionSet = new MySet<T>();
      const values = this.values();
      for (let i = 0; i < values.length; i += 1) {
        if (otherSet.has(values[i])) {
          intersectionSet.add(values[i]);
        }
      }
      return intersectionSet;
    } */

    intersection(otherSet: MySet<T>) {
      const intersectionSet = new MySet<T>();
      const values = this.values();
      const otherValues = otherSet.values();
      let biggerSet = values;
      let smallerSet = otherValues;
      if (otherValues.length - values.length > 0) {
        biggerSet = otherValues;
        smallerSet = values;
      }
      smallerSet.forEach((value) => {
        if (biggerSet.includes(value)) {
          intersectionSet.add(value);
        }
      });
      return intersectionSet;
    }

    difference(otherSet: MySet<T>) {
      const differenceSet = new MySet<T>();
      this.values().forEach((value) => {
        if (!otherSet.has(value)) {
          differenceSet.add(value);
        }
      });
      return differenceSet;
    }

    isSubsetOf(otherSet: MySet<T>) {
      if (this.size() > otherSet.size()) {
        return false;
      }
      let isSubset = true;
      this.values().every((value) => {
        if (!otherSet.has(value)) {
          isSubset = false;
          return false;
        }
        return true;
      });
      return isSubset;
    }
}
