const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);
set.delete(1);
console.log(set);

set.add(10);
set.add(40);

const setA = new Set<number>();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set<number>();
setB.add(2);
setB.add(3);
setB.add(4);

const union = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  const unionAb = new Set<T>();
  set1.forEach((value) => unionAb.add(value));
  set2.forEach((value) => unionAb.add(value));
  return unionAb;
};

console.log(union<number>(setA, setB));

const intersection = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  const intersectionAb = new Set<T>();
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionAb.add(value);
    }
  });
  return intersectionAb;
};

console.log(intersection<number>(setA, setB));

const difference = <T>(set1: Set<T>, set2: Set<T>): Set<T> => {
  const differenceSet = new Set<T>();
  set1.forEach((value) => {
    if (!set2.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};

console.log(difference<number>(setA, setB));

// union
console.log(new Set([...setA, ...setB]));

// intersection
console.log(new Set([...setA].filter((x) => setB.has(x))));

console.log(new Set([...setA].filter((x) => !setB.has(x))));
