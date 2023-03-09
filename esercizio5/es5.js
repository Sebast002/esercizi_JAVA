const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  person2.firstName = "Simon";


  //Perchè person2 non è una copia di person1, ma sono lo stesso oggetto. 
  
  console.log(person1);
  console.log(person2);