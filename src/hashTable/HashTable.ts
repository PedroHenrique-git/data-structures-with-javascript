import ValuePair from '../dictionaries/ValuePair';

export default class HashTable<T> {
    protected table: Record<string, ValuePair<T>>;

    constructor() {
      this.table = {};
    }

    // eslint-disable-next-line class-methods-use-this
    private loseloseHashCode(key: string | number): number {
      if (typeof key === 'number') return key;
      let hash = 0;
      for (let i = 0; i < key.length; i += 1) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }

    hashCode(key: string | number): number {
      return this.loseloseHashCode(key);
    }

    put(key: string, value: T): boolean {
      if (key !== null && value !== null) {
        const position = this.hashCode(key);
        this.table[position] = new ValuePair<T>(key, value);
        return true;
      }
      return false;
    }

    get(key: string | number): T | undefined {
      const valuePair = this.table[this.hashCode(key)];
      return valuePair.value || undefined;
    }

    remove(key: string | number): boolean {
      const hash = this.hashCode(key);
      const valuePair = this.table[key];
      if (valuePair !== null) {
        delete this.table[hash];
        return true;
      }
      return false;
    }
}
