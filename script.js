// console.log("hello world");
// console.warn("hello world");
// console.error("hello world");


// var a = 30;
// console.log(a);
// var a = "Name";
// console.log(a);

// //let name = "john";
// //console.log(name);
// //let name = "sam";


// const pi = 3.14;
// console.log(pi);
// //const pi=3.145;
// //console.log(pi);

// let valueOne = 2;
// let valueTwo = "a";
// console.log(valueOne +parseInt(valueTwo));

// const name = "john";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// var y;
// console.log(typeof name);

// console.log('My name is' + name +' and I am ' +age);
// console.log("My name is" + name +" and I am " +age);
// console.log("My name is $(name) + and I am $(age)");

// //Array

// arrayOne = ["john",30,true,null,undefined]
// console.log(arrayOne);

// arrayOne.push("Apple");
// console.log(arrayOne);
// arrayOne.pop();
// console.log(arrayOne);

// //unshift

// arrayOne.unshift("Mango");
// console.log(arrayOne);

// console.log(arrayOne[0]);

// arrayOne[3]="banana"
// console.log(arrayOne);

// console.log(arrayOne.length);

// arrayOne.splice(3,1);
// console.log(arrayOne);

// let valueOnee="2";
// let valueTwoo=2;

// console.log(valueOnee==valueTwoo);
// console.log(valueOnee=== valueTwoo);

// //conditional statements

// let value= 18;
// if(value>=18)
//     {
//         console.log("you are adult");
//     }

// //if else

// let value1= 18;
// if(value1>=18)
//     {
//         console.log("you are adult");
//     }
// else{
//     console.log("you are not adult");
// }

// //Ternary

// let ages=20;

// let type = (age>=18)?"Adult" :"Minor"
// console.log(type);


//Function

console.log("Functions");

function showString(){
    console.log("hello world");
}

showString();

var showString = function()
{
    console.log("hello world");
}
showString();

//arrow Function


var showString =() =>
{
    console.log("Arrow function hello world");
}
showString(); 

//map Function

var number=[1,2,3,4,5];

var square = number.map((num)=>{
    return num*num;
})
console.log(square);


var fruits=["Apple","Banana"];

var upperCase = fruits.map((fruit)=>{
    return fruit.toUpperCase;
})
console.log(upperCase);


//enhanced object

var name="john";
var age=20;

var person = {
    name,
    age,
    isStudent:true
}

console.log(person);

//Destructuring

var person={
    name:"adith",
    age:20,
    isStudent:true
}

var {name ,age, isStudent}=person

console.log(name);
console.log(age);
console.log(isStudent);

//promises


// var promise= new Promise((resolve,reject)=>{
//     setTimerout(()=>{
//          resolve("Promise resolved")
//     },2000)
// })

// promise.then((result)=>{
//     console.log(result);
// })

//Spread operator

var numbers=[1,2,3,4,5];

var newNumber=[...numbers,6,7,8];

console.log(newNumber);