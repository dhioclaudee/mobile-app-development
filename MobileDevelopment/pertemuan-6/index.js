//Spread Operator

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// console.log(...numbers);


//1. Duplikasi Array 
// let numbers2 = numbers;

// numbers.push(6);

// console.log(numbers2);

//new  right Duplikasi Array

// let numbers2 = [...numbers];
// numbers.push(6);

// console.log(numbers2);

//2. Penggabungan array
// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [7, 8, 9];

// let combineNumbers5 = numbers1.concat(4, numbers2, numbers3, 10);
// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
// console.log(combineNumbers5);
// console.log(combineNumbers6);

// let john = { 
//     fullName: "John Doe",
//     age: 33, 
//     address: "Manado",
// };

// john = {

//     ...john,
//     job: "Teacher",
// };

// console.log(john);

// let obj1 = {
//     a: 1,
//     b: 2,
// };
// let obj2 = {
//     c: 4,
//     d: 5,
// };
// let combineObj = {
//     ...obj1,
//     ...obj2,
// };
// console.log(combineObj);


//Destructuring
// let numbers = [1, 2, 3, 4, 5];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// let d = numbers[3];
// let e = numbers[4];

//destructuring mengikuti urutan penulisan untuk mengambil yang akan dijadikan output
// let [a, b, c, d, e] = numbers;

//Contoh untuk menulis berurutan tanpa mengikuti abjad dll...
// let [, b, , d] = numbers;

// console.log(b, d);

//Destructuring object

let dhio = {
    fullName: "dhioclaudee",
    age: 20,
    address: "Mapanget",
};

// let {fullName, age, address} = dhio;
// console.log(fullName, age, address);

// function passing object
const ucapakanSalam = ({fullName}) => {
    let kalimat = `Hallo nama saya ${fullName}`;
    console.log(kalimat);
};
ucapakanSalam(dhio);









