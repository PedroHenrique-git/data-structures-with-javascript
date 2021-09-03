import Queue from '../queues/Queue';

function hotPotato<T>(elementsList: T[], num: number): {
    elimitated: T[],
    winner: T
} {
  const queue = new Queue<T>();
  const elimitatedList: T[] = [];

  for (let i = 0; i < elementsList.length; i += 1) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i += 1) {
      const el = queue.dequeue() as T;
      queue.enqueue(el);
    }
    const el = queue.dequeue() as T;
    elimitatedList.push(el);
  }

  const winner = queue.dequeue() as T;

  return {
    elimitated: elimitatedList,
    winner,
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato<string>(names, 7);
result.elimitated.forEach((name) => {
  console.log(`${name} was elimiteted from the Hot potato game`);
});
console.log(`The winner is: ${result.winner}`);
