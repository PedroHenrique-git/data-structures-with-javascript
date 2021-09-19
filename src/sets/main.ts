import MySet from './sets';

const set = new MySet<number>();
const otherSet = new MySet<number>();

otherSet.add(10);
otherSet.add(13123);

set.add(10);
set.add(15);
set.add(60);

console.log(set);
console.log(set.has(60));
set.delete(60);
console.log(set);
console.log(set.size());
console.log(set.values());

const unionSet = set.union(otherSet);
const intersectionSet = set.intersection(otherSet);
const differenceSet = set.difference(otherSet);
const subSet = set.isSubsetOf(otherSet);

console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);
console.log(subSet);
