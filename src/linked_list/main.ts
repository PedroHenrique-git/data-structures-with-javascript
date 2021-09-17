import LinkedList from './LinkedList';

const list = new LinkedList<number>();
list.push(15);
list.push(10);
list.push(15);
list.push(10);
list.removeAt(0);
list.removeAt(0);
list.insert(10, 1);
list.insert(10, 1);

console.log(list);
console.log(list.indexOf(15));
console.log(list);
console.log(list.remove(15));
console.log(list);
console.log(list.getHead());
console.log(list.toString());
