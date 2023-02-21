let person = [
    {
        name: "John",
      age: 35,
      address : "Manado",
    },
    {
        name: "Bill",
      age: 23,
      address : "Bitung",
    },
    {
        name: "Bob",
      age: 17,
      address : "tomohon",
    },
    {
        name: "Jack",
      age: 20,
      address : "Manado",
    },
  ]
//   person.forEach(function(value){
//     console.log(value.name);
//   });

// person.forEach(function(value){
//     console.log (value.name);
// });
// let personnames = person.map(function(value){
//   return value.name;
// })
//   console.log(personnames);
  
// let filteredPerson = person.filter(function(value){
//   return value.name === "John";
// });
// console.log(filteredPerson);

let filteredPerson = person.filter(function(value){
  return value.age <= 24;
});
console.log(filteredPerson);