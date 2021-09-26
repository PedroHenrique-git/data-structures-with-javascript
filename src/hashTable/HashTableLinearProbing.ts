import ValuePair from '../dictionaries/ValuePair';

export default class HashTableLinearProbing<T> {
    public table: Record<string, ValuePair<T>>;

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

    put(key: string | number, value: T) {
      if (key !== null && value !== null) {
        const position = this.hashCode(key);
        if (this.table[position] === null) {
          this.table[position] = new ValuePair<T>(String(key), value);
        } else {
          let index = position + 1;
          while (this.table[index] !== null) {
            index += 1;
          }
          this.table[index] = new ValuePair<T>(String(key), value);
        }

        return true;
      }
      return false;
    }

    get(key: string | number): T | undefined {
      const position = this.hashCode(key);
      if (this.table[position] !== null) {
        if (this.table[position].key === key) {
          return this.table[position].value;
        }
        let index = position + 1;
        while (this.table[index] !== null && this.table[index].key !== key) {
          index += 1;
        }
        if (this.table[index] !== null && this.table[index].key === key) {
          return this.table[position].value;
        }
      }
      return undefined;
    }

    remove(key: string | number): boolean {
      const position = this.hashCode(key);
      if (this.table[position] !== null) {
        if (this.table[position].key === key) {
          delete this.table[position];
          this.verifyRemoveSideEffect(key, position);
          return true;
        }
        let index = position + 1;
        while (this.table[index] !== null && this.table[index].key !== key) {
          index += 1;
        }
        if (this.table[index] !== null && this.table[index].key === key) {
          delete this.table[index];
          this.verifyRemoveSideEffect(key, index);
          return true;
        }
      }
      return false;
    }

    verifyRemoveSideEffect(key: string | number, removedPosition: number): void {
      const hash = this.hashCode(key);
      let index = removedPosition + 1;
      while (this.table[index] !== null) {
        const posHash = this.hashCode(this.table[index].key);
        if (posHash <= hash || posHash <= removedPosition) {
          this.table[removedPosition] = this.table[index];
          delete this.table[index];
          // eslint-disable-next-line no-param-reassign
          removedPosition = index;
        }
        index += 1;
      }
    }

    // eslint-disable-next-line class-methods-use-this
    djb2HashCode(key: string): number {
      const tableKey = key;
      let hash = 5381;
      for (let i = 0; i < tableKey.length; i += 1) {
        hash = (hash * 33) + tableKey.charCodeAt(i);
      }
      return hash % 1013;
    }
}
