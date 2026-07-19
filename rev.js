//variables

// three type variable are present in javascript

// var , let , const;

// var es5 ka part ha or let es6 ka part ha

var a = 12;
var a;
let a = 12;
const a = 12;


//declarations and initialization

var a; // declare karna

var a = 12; // declare and initialize

// var

// window mein add hota hai
// function scoped hota hai
// app firse declare kar sakte ho same name sa and error nahi aayega
// hosting yes intilization as undefined


// let
// block scope
// redeclere nahi hota hai
// reassign nahi hota hai
// temporal dead zone



// const 
// block scope
// redeclare nahi hota hai
// reassign nahi hota hai
// temporal dead zone

// scope (global , block , functional)

var a = 12; // global scope | pure code ma kahi bhi access kar sakte ha

{
  let a = 12; // block scope | sirf es block ma hi use kar sakte ha
}

function abcd() {

  if (true) {
    let b = 12; // ya sirf if wala braces ma us eho sakta ha
  }

  let b = 12; // functional scope | sirf es finction ma kahi bhi acces ho skta ha
}


// Reassigment , redeclaration

var a = 12; //  redeclaration is possible ti var
a = 32; // Reassigment are possible

let b = 12; // redeclaration isnot  possible to let
b = 32; // Reassigment are possible


// Temporal Dead Zone

// tdz - utna area jitne mein js ko pata ti hai variable exist karta hai par wo aapko value nahi de sakta


console.log(a);

let a = 12;


// Hoisting impact per type

// hoisting ek variable ko jab js mein banate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jata hai

// Data Types + Type System

// Two main types

// perimitive data type | aisi values jinko copy karne par tumhe ek real copy mil jaaye

// (string, number ,boolean , null , undefined ,  symbol , bigint)


//refrence data type  inko copy karne par real copy nahi milegi but aapko refernce milega parent ka

//(arrays , object , functions) []  {} ()


// Dynamic typing = js mein static typing nahi ha and yaha par hai dynamic typing matlab aap data ko chnage kar sakta ha kyu ki yaha par dynamic data types hai

let a = 12;
a = true;
a = 'HARSH'
a = []
a = null;

// typeof quirks (e.g typeof null === "object")

// har value ko check kar sakta vo kon sa type data type ka

// type coercion (== vs ===)

// concept ha jismein aapka ek type automatically convert ho jaayega

//   "5"  + 1 = '51' this process is called concatenation

// operators 

// Arithmetic , comparison , logical , assigment , unary , ternary

// Arithmetic = + - / * % **

// ** 2 ** 3 = 8 power ho jati ha
// % 8% 2 = 1 remainder nikal ta ha

// comparison

// =  ==  ===  !=   !==  >=   <=   <    >

// assigment 
// +=  -= *=  /= %=

// logical  && || !


//increment and decrement operator


// postincrement
let a = 5;
a++
console.log(a);
// phela 5 fir dubrakaro ga tab 6 print hoga
// output 6

//  pre increment operator

let b = 7;
++b
console.log(b);


// conditional

// if else elseif switch case



// loops
// type of loops


//  kaha sa jaana hai => kaha tak jaana hai => kaise jaana hai
// for loop lega ga

// syntax

for (start; end; change) {

}

// ex  el loop bnao jo  1 sa 50 tak no print kara ek ek badhe



// kaha sa jaana hai => kab rukna hai => kaise jaana hai
// while lega ga 
// 1 sa count karo ab tak count krna jab tak ma hello na bol du
// syntax  
start
while (end) {
  // code
  change
}



do {

}
while (end)


// functions  
// function expression
let fnc = function () {
  console.log('prince');
}


fnc();

function abcd() {

}

// fat arrow function
let fnc = () => {

}

fnc()


  //dynamic value asa deta ha

  `${v1}`

//parameters and argguments

function add(v1, v2) {  // v1 and v2 are parameters
  console, log(v1 + v2)
}
add(1, 3);  // this is arrguments

// default parameters

// agar koi value nahi bheji gyi ha tho default value undefined hoti ha

function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2)
}

add(1, 2);


// rest and spread operators

// agar function ka para,eters ma lega ... tho ya rest operators ha
// array ya object ma us eho tho vo spread operator ha

function abcd(...val) {
  console.log(val)
}

abcd(1, 2, 3, 4, 5, 6)


// return mtlab jaha sa aaye ho wahi daal denge

// example : 
function abcd(v) {
  return 12 + v;
}

let val = abcd(23)

console.log(val)
// output = 35

// first class function  = function ko values ki tarah treat kar sakte ha
function abcd(val) {
  val()
}

abcd(function () {
  console.log("hey")
})

// output ma hey ayga


// higher order function wo function hota hai jo ki return kare function ya fir acceept kare ek fnc apne parameter mein

function abcd() {
  return function () {
    console.log("hey")
  }
}

abcd()();

// pure vs impure function 
// aisa function jo ki baahar ki value ko na badle wo hai pure fnc
let a = 12;

function pure() {
  console.log("hey")
}

function impure() {
  a++;
}
// aisa function jo baahar ki value ko badal de wo hai impure function

// closures

function abcd() {
  let a = 12;
  return function () {
    console.log(a)
  }
}

// lexical scoping

function abcd() {
  let a = 12;

  function defg() {
    let b = 23;
  }
  function ghij() {
    let c = 14;
  }
}


 // IIFE (immediately invoked function Expression)

 (function (){

 })()

 // array

  let marks = [10 , 40 , 52 , 37 , 92]
 // acces value  marks[0] 0 are index
// modify arrays  
let arr = [1,2,3,4,5];
arr[2] = 12;
 
// array method 

let arr = [1,2,3,4,5]

arr.push(7000);

//output = [1,2,3,4,5,7000]

arr.pop();

// output = [1,2,3,4]

arr.shift();
// output = [2,3,4,5];

arr.unshift(0);
// output = [0,1,2,3,4,5]

arr.splice(2,1) // first value defined kaha sa value htani ha second value kitni value htani hai

//output = [1,2,4,5]

arr.slice(2,1)

// slice ek naya return copy deta ha array ka
let newarr = arr.slice(0,3) // kaha sa htana kaha tak htana
console.log(newarr);

// reverse
let arr = [1,2,3,4,5];
arr.reverse();

// sort

let arr = [11 ,62,3,4]

arr.sort((a,b)=> a - b) //accending order
arr.sort((a,b)=> b - a) // decending order 

 // forEach
let arr = [11,3,4,2]
 arr.forEach(function(val){
 console.log(val + 5)
 })

 // map
let newarr =  arr.map(function(val){
  return 12 ;
 })

 // output [12,12,12,12]

 // filter
 let arr = [ 1,2,3,4,5,6,7,8]
 let newarr =   arr.filter(function(val){
  if(val>4){
    return true;
  }
 })

 // reduce

 let arr = [1,2,3,4,5,6]

 let newarr = arr.reduce(function(acc , val){
  return acc + val
 },0)

 //find

let va =  arr.find(function(){
  return val === 1;
 })

 // some
  let arr = [10 ,30 ,32 , 90]
 let any = arr.some(function(){
  return val > 85
 });

 //every

 let eve = arr.every(function(val){
  return val > 5;
 })

 // destruching

 let arr = [1,2,3,4,5]

 let [a,b,  ,c] = arr;

 // spread operator

 let arr = [1,2,3,4,5,6,7,8,9]

 let arr2 = [...arr];