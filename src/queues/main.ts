import Queue from './Queue';

const queue = new Queue<number>();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(10);
queue.enqueue(90);

queue.dequeue();
queue.dequeue();

console.log(queue.size());
console.log(queue.toString());
