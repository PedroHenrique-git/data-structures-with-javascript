const map = new Map<string, string>();
map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'john@email.com');
map.set('Tyrion', 'tyrion@email.com');
console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));
map.delete('John');
console.log(map);
map.clear();

console.log('-------------WeakMap---------------');

const map2 = new WeakMap<Record<string, string>, string>();
const obj1 = { name: 'Gandalf' };
const obj2 = { name: 'John' };
const obj3 = { name: 'Tyrion' };
map2.set(obj1, 'gandalf@email.com');
map2.set(obj2, 'john@email.com');
map2.set(obj3, 'tyrion@email.com');
console.log(map2.has(obj1));
console.log(map2.has(obj3));
map2.delete(obj2);
