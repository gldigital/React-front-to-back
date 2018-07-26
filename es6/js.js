const fruits = ['Apples', 'Oranges', "Grapes"];

// For each fruits.forEach((fruits, index) => {   console.log(fruits, "our
// fruit"); }); MAP const singleFruit = fruits.map((fruit) => fruit.slice(0,
// -1).toUpperCase()); Filters const people = [{     id: 1,     name: 'Karen' },
//   {     id: 2,     name: 'Bob'   },   {     id: 3,     name: 'Tyler'   } ];
// const people2 = people.filter(person => person.id !== 2);
// console.log(people2); Spread const person1 = {   name: 'Greg',   age: 30 };
// const person2 = {   ...person1,   email: 'greg@gmail' };
// console.log(person2); Destructuring const profile = {   name: 'John',
// address: {     street: '40 main st',     city: 'Boston'   },   hobbies:
// ['movies', 'music'] } const {name, address, hobbies} = profile
// console.log(`my name is ${name} and live on ${address.street} and my favorite
// hobby are the ${hobbies[0]}.`); Classes class Person {   constructor(name,
// age) {     this.name = name;     this.age = age;   }   greet() {     return
// `Hello, my name is ${this.name} and I am ${this.age}`   } } const person1 =
// new Person('Greg', 33); const person2 = new Person('Erica', 22); //
// console.log(person1.greet()); Subclasses class Customer extends Person {
// constructor(name, age, balance) {     super(name, age);     this.balance =
// balance;   }   info() {     return `${this.name} owes ${this.balance}.`   } }
// const customer1 = new Customer('Kevin', 32, 300); console.log(`Hi
// ${customer1.name} your balance is ${customer1.balance}`);
// console.log(customer1.info());

