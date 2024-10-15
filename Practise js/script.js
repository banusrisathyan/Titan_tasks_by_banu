// // arrow function
// const hello = (name, age) => console.log(`hello ${name} and age ${age}`);

// hello("banusri" , 20)

// // function types
// numbers=[1,2,3,4,5,6]
// const result = numbers.reduce((prev, element) => prev + element);
// console.log(result)
// const even = numbers.filter((element)=>{return element%2==0})
// console.log(even)
// const map=numbers.map((element)=>element*2)
// console.log(map);
// const each = numbers.forEach(element => {
//     const each = numbers.forEach(element => {
//         element;
//    })
//    console.log(element)
// })

// // objects
// const car = {
//     type: "benz",
//     cost: 120000,
//     changecolor: function changecolor() {
//         return "black";
//     }
// };

// car.color = car.changecolor();

// console.log(car.color); 


// const child = {
//     favfood: "Biriyani",
//     ff: function() { console.log(this.favfood); },  // Regular function
//     ffc: function() { console.log(this.favfood = "payasam"); }  // Regular function
// }

// console.log(child);       
// child.ff();  
// child.ffc(); 

// // there is no arrow function in the objects.

// // Object constructor function
// function User(name, age, favoriteFood) {
//     this.name = name;  // 'this' refers to the new object being created
//     this.age = age;
//     this.favoriteFood = favoriteFood;

//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I love ${this.favoriteFood}.`);
//     };
// }

// // Creating new instances of the User object using the constructor
// const user1 = new User('Sri Banu', 14, 'Biriyani');
// const user2 = new User('John Doe', 25, 'Pizza');

// // Accessing the properties and methods
// console.log(user1.name);   // Output: Sri Banu
// console.log(user2.age);    // Output: 25

// user1.greet();             // Output: Hello, my name is Sri Banu, I am 14 years old, and I love Biriyani.
// user2.greet();             // Output: Hello, my name is John Doe, I am 25 years old, and I love Pizza.

// Static keyword
// class User{
//     total = 500;
//     // normal elements can be accessed by the this keyword except the static elements
//     static Name = "Sri banu";
//     static Age(){
//         console.log(`Age:14`)
//     }

//     Mark(n){
//          return this.total = n/this.total;
//     }
//     display(){
//         console.log(User.Name);
//         // static elements can be accessed only with the class name not using the this keyword.
//     }
// }

// const user1 = new User();
// console.log(User.Name)
// console.log(user1.Mark(455));
// user1.display();

// inheritance

// class parent {
//     constructor(name){
//         this.name = name;

//     }
//     addName(n){
//         console.log(this.name+" "+n); 
//     }
// }
// class child1 extends parent{
//     constructor(name,age,school){
//         super(name);
//         this.age = age;
//         this.school = school;
//     }

//     display(){
//         const n = "sheela"
//         this.addName(n);
//     }
// }

// const Rahul = new child1("Rahul" , 23,"hhhh");
// Rahul.display();


// getters and setters

// destructuring
// [] to perform array destructuring
// {} to perform object destructuring

// const cars =["benz" , "vento" , "polo" , "rapid"];
// [cars[0] ,cars[1]]=[cars[1] ,cars[0]];
// console.log(cars)

// const [first , second ,...extra] = cars;
// console.log(first);
// console.log(second);
// console.log(extra);


// // extract values from the objects

// const icecream = {
//     flavour:"Vanila",
//     quantity:10,
//     package:"takeaway"
// }

// const icecream1 = {
//     flavour:"choco",
//     quantity:15,
//     package:"sit and eat"
// }

// // declaring as variables{while destructuring it should have the same name as the properties have}
// const { flavour, quantity, package } = icecream;
// console.log(flavour);
// console.log(quantity);
// console.log(package);

// const { flavour1, quantity1, package1 } = icecream1;
// console.log(flavour1);
// console.log(quantity1);
// console.log(package1);

// destructure to function

// function display({flavour , quantity , package}){
//     console.log(flavour , quantity , package);

// }
// display(icecream1);

// nested objects 

// const person ={
//     fullname : "Bnausri",
//     age:20,
//     newStudent : true,
//     address : {
//         street : "12/2 cheranmanagar",
//         city : "Coimbatore",
//         country : "India"
//     }
// }
// console.log(person.address)

// for(const property in person.address){
//     console.log(person.address[property]);
// }


// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age=age;
//         this.address=new Address(...address)
//     }
// }
// class Address {
//     constructor(s,c,co){
//         this.c=c;
//         this.co=co;
//         this.s=s;
//     }
// }

// const p1 = new Person("john",22,"123","blabla","bla bla bla");
// const p2 = new Person("patrick",23,"123","blabla","bla bla bla");
// const p3 = new Person("Emmy",23,"123","blabla","bla bla bla");

// console.log(p1);
// console.log(p1.address.s);
// console.log(p1.address.c);
// console.log(p1.address.co);

// Array of objects 

// const fruits = [{name:"apple", color:"red ",cost:22.5},
// {name:"Orange", color:"orange ",cost:23.5},
// {name:"Avacado", color:"green",cost:25.5}]

// console.log(fruits[0])

// // to add new 
// fruits.push({name:"promogrante",color:"purple",cost:55})
// console.log(fruits)

// // foreach(looping through each objects)

// fruits.forEach(element=>console.log(element.color))

// fruits.map(element => console.log(element.name+"Name"))

// // pop,push filter and reduce can also be used as its properties to perform

// sorting 

// let numbers = [1,4,6,8,9,7,5,2,10]
// console.log(numbers.sort((a, b)=> b-a));


// closure/*8956230
// function Game(){
// let score = 0;
// function increase(p){
//     score+=p;
//     console.log(score);
// }
// function decrease(p){
//     score-=p;
//     console.log(score);
// }
// function getscore(){
//     return score;
// }
// // Return all functions as an object
// return {increase,decrease,getscore}
// }
// const game = new Game();
// game.increase(-5);
// game.increase(10);
// game.decrease(-15);
// game.increase(1);
// console.log(game.getscore());

// setTimeOut function
// setTimeout(Callback , delay)

// function hi(){
//     window.alert("hello");
// }
// const timeout=setTimeout(()=> window.prompt("Welcome"),3000);
// // cancelling the operation of timeout
// clearTimeout(timeout);
// let timer;
// function starttimer(){
//    timer= setTimeout(() =>window.alert("Welcome"),3000 )
//     console.log("Started")
// }
// function cleartimer(){
// clearTimeout(timer);
// console.log("cleared")
// }
// console.time()

// for(let i = 0;i<10;i++){
//     console.log("js");
// }
// console.time()

// function hi(){
//     console.time(`time`);
//     for(let i = 0;i<10;i++){

//     }
//     console.timeEnd(`time`);
// }
// hi();

// compund interest calci

function calculate(){
    const total = document.getElementById("total-a");
    const pa = document.getElementById("principal");
    const ra = document.getElementById("rate");
    const ya = document.getElementById("years");
    const output = document.getElementById("output");

    let principal = Number(pa.value);
    let rate = Number(ra.value/100);
    let year = Number(ya.value);

    if(principal <0||isNaN(principal )){
        principal =0;
        pa.value = 0;
        window.alert(output.innerHTML="Enter only the digits above 0 but Texts are not allowed")
    }
    if(rate<0||isNaN(rate)){
        rate=0;
        ra.value = 0;
        window.alert(output.innerHTML="Enter only the digits above 0 but Texts are not allowed")
   }
    if(year<0||isNaN(year)){
        year = 0;
        ya.value = 0;
        window.alert(output.innerHTML="Enter only the digits above 0 but Texts are not allowed")

    }
const result = principal * Math.pow((1+rate/1),1* year);
total.textContent = result.toLocaleString(undefined,{
    style:"currency",
    currency:"USD"});
}