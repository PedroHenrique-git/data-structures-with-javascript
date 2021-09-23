import Dictionary from './Dictionary';

const dictionary = new Dictionary<string>();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'john@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.hasKey('gandalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('John'));

dictionary.remove('John');

console.log(dictionary.keyValues());
