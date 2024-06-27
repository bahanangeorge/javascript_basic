//console.log("hello world");
//console.warn("hello world");
//console.error("hello world");


//var a = 30;
//console.log(a);
//var a = "Name";
//console.log(a);

//let name = "john";
//console.log(name);
//let name = "sam";


//const pi = 3.14;
//console.log(pi);
//const pi=3.145;
//console.log(pi);

//let valueOne = 2;
//let valueTwo = "a";
//console.log(valueOne +parseInt(valueTwo));

//const name = "john";
//const age = 30;
//const rating = 4.5;
//const isCool = true;
//const x = null;
//var y;
//console.log(typeof name);

//console.log('My name is' + name +' and I am ' +age);
//console.log("My name is" + name +" and I am " +age);
//console.log("My name is $(name) + and I am $(age)");

//Array

//arrayOne = ["john",30,true,null,undefined]
//console.log(arrayOne);

//arrayOne.push("Apple");
//console.log(arrayOne);
//arrayOne.pop();
//console.log(arrayOne);

//unshift

//arrayOne.unshift("Mango");
//console.log(arrayOne);





//Day3
//let r = 5;
//let y = 2;
//let z = x + y;

//console.log(z);

console.log("Function");

function showString()
{
    console.log("hello world");
}
showString()
{
    var showstring=function(){

    }
}




//map

var number=[1,2,3,4,5];

var square=number.map((num)->{
    return num*num;
})


console.log(square);

var fruits = ["apple","banana"];
var upperCase = fruits.map((fruits)->{
    return fruit.topperCase();

});

console.log(upperCase);


var name="john";
var age=20;

var person = {
    name,
    age,
    isStudent:true,
}

console.log(person);



//Destructuring

var person={
    name:Akhil,
    age:20,
    isStudent:true,

}

console.log(name);
console.log(age);
console.log(isStudent);


//promises

var promise=new promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("promise resolved")

   }, 2000);
})

promise.then((result)=>{
    "result":unknown word
})



//! spread opeerator

var numbers=[1,2,3,4,5];

var newNumber=[...numbers,6,7,8];

console.log(newNumber);