import HashTable from './HashTable';

const hash = new HashTable<string>();

/*
    hash.put('Gandalf', 'gandalf@email.com');
    hash.put('John', 'john@email.com');
    hash.put('Tyrion', 'tyrion@email.com');
    console.log(`${hash.hashCode('Gandalf')} Gandalf`);
    console.log(`${hash.hashCode('John')} John`);
    console.log(`${hash.hashCode('Tyrion')} Tyrion`);

    console.log(hash.get('Gandalf'));
    hash.remove('Gandalf');

    console.log(hash);
*/

hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstane@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

console.log(hash.isEmpty());

console.log(hash.toString());
