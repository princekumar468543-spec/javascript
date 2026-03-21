let product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
}
console.log(Object.keys(product).length);

let user = {
  name: "Aman",
  age: 21,
  city: "Delhi"
}

for(let key in user){
 console.log(key,user[key]);
}


let book = {
  title: "JavaScript",
  price: 500,
  author: "XYZ"
}

for(let key in book){
    console.log(key,":",book[key]);
}

let users = {
  name: "Ravi",
  age: 20
}

console.log("hello"in users);

let products = [
 {name:"Laptop", price:50000},
 {name:"Phone", price:20000},
 {name:"Tablet", price:15000}
]

let total = products.reduce(function(acc,val){
 return  acc+val.price
},0)
console.log(total);