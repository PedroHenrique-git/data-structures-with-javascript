export default class ValuePair<T> {
  constructor(public key: string, public value: T) {
    this.key = key;
    this.value = value;
  }

  toString(): string {
    return `[#${this.key}: ${this.value}]`;
  }
}
