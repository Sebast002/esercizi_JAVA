const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }
  
  let pair= Object.entries(person);
  
  for(let entry of pair) {
    let[key, val] = entry;
    console.log(key + ": " + val)
  } 