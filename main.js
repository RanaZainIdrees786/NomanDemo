console.log("hello welcome to functions arrays and objects");

marks = [33, 4, 5, 6];
// marks[0] //33
// const name = ["zain", "abdullah", 3, true];
// marks.splice(0,2,100);

// push, unshift
// shift, unshift

// marks.indexOf(4) // ------> 1
// marks.indexOf(6) // ------> 4
// console.log(marks.indexOf(87));

person = {
  name: "zain",
  cnic: "45943-9303033-3",
  address: {
    city: "Lahore",
    province: "Punjab",
    country: "Pakistan",
  },
  skills: ["HTML", "CSS", "Javascript"],
  contact: [
    { operator: "Jazz", number: "3004532993" },
    { operator: "Ufone", number: "3334532993" },
    { operator: "Zong", number: "3134532993" },
  ],
};

// delete person['skills']
// console.log(person);

delete person["skills"];
// after removal
const keys = Object.keys(person);
console.log(keys);
console.log(keys.includes("skills"));

// person["email"] = "zain@gmail.com";
// console.log(person['contact'][1]['operator']);

// console.log(person["skills"][1]);
// console.log(person);
// console.log(person['name'], person['cnic'])
// console.log(person['address']['country'])
// console.log(person.address.country)

// Array and object with for loop
// Array of objects
const products = [
  { id: 1, title: "Dal Chana", price: 340 },
  { id: 2, title: "Surf Excel 1Kg", price: 560 },
  { id: 3, title: "Desi ghee 1kg", price: 1600 },
  { id: 3, title: "Boss Chair", price: 2500 },
];

// filter out products which have price < 1000
let min = 300;
let max = 1700;
// for (let index = 0; index < products.length; index++) {
//   const product = products[index];
//   if (product["price"] < max && product['price'] > min) {
//     console.log(product);
//   }
// }

// for (const product of products) {
//   if (product["price"] < max && product["price"] > min) {
//     console.log(product);
//   }
// }

person = {
  name: "zain",
  cnic: "45943-9303033-3",
  address: {
    city: "Lahore",
    province: "Punjab",
    country: "Pakistan",
  },
  skills: ["HTML", "CSS", "Javascript"],
  contact: [
    { operator: "Jazz", number: "3004532993" },
    { operator: "Ufone", number: "3334532993" },
    { operator: "Zong", number: "3134532993" },
  ],
};

// prototypal inheritance
for (const key in person) {
  // for skipping keys that are not person to object
  //   if (!Object.hasOwn(person, key)) continue;
  const element = person[key];
  console.log(key, element);
}

// ATM Machine Code

Accounts = [
  {
    id: 1,
    pin: 1234,
    name: "Muhammad Noman",
    balance: 87000,
    transactions: [],
  },
  {
    id: 2,
    pin: 5678,
    name: "Rana Zain Idrees",
    balance: 12000,
    transactions: [],
  },
  { id: 3, pin: 9112, name: "Kabir Ahmed", balance: 36533, transactions: [] },
  { id: 4, pin: 3456, name: "Muneeb Ramzan", balance: 44993, transactions: [] },
];


// ATM Machine With Multiple Accounts
// transaction
// {type:'withdarawal', amount:5400}

// 1. Login ---> pin ----> logged in user -----> cash deposit, cash withdrawal ----->
// 2. Register
// 3. Exit
