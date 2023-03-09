/* { name: 'Paul', age: 21 } => Paul-21 */



const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function nicknameMap(person) {
    let newArray = [];
    persons.forEach((nickname) => {
      newArray.push(`${nickname.name}-${nickname.age}`);
      }
    );
    return newArray;
  }

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
