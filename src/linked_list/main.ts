import LinkedList from './LinkedList';

const list = new LinkedList<number>();
list.push(15);
list.push(10);
list.removeAt(0);
list.removeAt(1);

console.log(list);
