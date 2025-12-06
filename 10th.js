const prompt = require("prompt-sync")();


let a = Number(prompt("Enter the number one"));
let b = Number(prompt("Enter the number two"));
let c = Number(prompt("Enter the number three"));
let d = Number(prompt("Enter the Number foure"));

let largest, second;

if (a >= b && a >= c && a >= d) {
    largest = a;
} else if (b >= a && b >= c && b >= d) {
    largest = b;
} else if (c >= a && c >= b && c >= d) {
    largest = c;
} else {
    largest = d;
}


if (largest == a) {
    if (b >= c && b >= d)
        second = b;
    else if (c >= b && c >= d)
        second = c;
    else {
        second = d;
    }

} if (largest == b) {
    if (a >= c && a >= d)
        second = a;
    else if (c >= a && c >= d)
        second = c;
    else {
        second = d;
    }
} if (largest == c) {
    if (a >= d && a >= b)
        second = a;
    else if (b >= a && b >= d)
        second = b;
    else {
        second = d;
    }

} if (largest == d){
    if ( a>=c && a>=b)
        second = a;
    else if(b>=c && b>=a)
        second = b;
    else{
        second = c;
    }
}
console.log("largest = ", largest);
console.log("secondlargest = ", second);




