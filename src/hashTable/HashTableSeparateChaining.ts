import ValuePair from '../dictionaries/ValuePair';
import LinkedList from '../linked_list/LinkedList';

export default class HashTableSeparateChaining<T> {
    protected table: Record<string, LinkedList<ValuePair<T>>>;

    constructor() {
      this.table = {};
    }

    // eslint-disable-next-line class-methods-use-this
    private loseloseHashCode(key: string): number {
      let hash = 0;
      for (let i = 0; i < key.length; i += 1) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    }

    hashCode(key: string): number {
      return this.loseloseHashCode(key);
    }

    put(key: string, value: T): boolean {
      const position = this.hashCode(key);
      if (this.table[position] === null) {
        this.table[position] = new LinkedList<ValuePair<T>>();
        this.table[position].push(new ValuePair<T>(key, value));
        return true;
      }
      return false;
    }

    get(key: string): T | undefined {
      const position = this.hashCode(key);
      const linkedList = this.table[position];
      if (linkedList !== null && !linkedList.isEmpty()) {
        let current = linkedList.getHead();
        while (current !== null) {
          if (current.element.key === key) {
            return current.element.value;
          }
          current = current.next;
        }
      }
      return undefined;
    }

    remove(key: string) {
      const position = this.hashCode(key);
      const linkedList = this.table[position];
      if (linkedList !== null && !linkedList.isEmpty()) {
        let current = linkedList.getHead();
        while (current !== null) {
          if (current.element.key === key) {
            linkedList.remove(current.element);
            if (linkedList.isEmpty()) {
              delete this.table[position];
            }
            return true;
          }
          current = current.next;
        }
      }
      return false;
    }
}
