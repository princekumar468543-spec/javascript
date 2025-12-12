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


let ch =  (prompt("Enter the number"));

if( ch >= "A" && ch <= "Z"){
    console.log("uppercase",ch);
}else if( ch >= "a" && ch <="z"){
    console.log("Lowercase",ch);
} else if( ch >= "0" && ch <= "100"){
    console.log("digit",ch);
}else{
    console.log("special character");
}


let n = Number(prompt("Enter the number"));

let root = Math.sqrt(n);

if( root % 1 === 0){
    console.log("It,s perfect square no.");
} else{
    console.log("It,s not perfect square");
}
    

let s1 = (prompt("Enter the subject1"));
let s2 = (prompt("Enter the subject2"));
let s3 = (prompt("Enter the subject3"));
let s4 = (prompt("Enter the subject4"));
let s5 = (prompt("Enter the subject5"));

let failcount = 0;
 
if(s1<33){
    failcount = failcount + 1 ;
}
if(s2<33){
    failcount = failcount + 1 ;
}
if(s3<33){
    failcount = failcount + 1 ;
}
if(s4<33){
    failcount = failcount + 1 ;
}
if(s5<33){
    failcount = failcount + 1 ;
}
console.log("fail sublect", failcount);
 
if(failcount == 0){
    console.log("overall pass")
} else{
    console.log("over all fail")
}


 let waterbill = prompt("Enter your bill amount ");

 if(  waterbill<=50){
    console.log("Amount = 4/l");
 } else if( waterbill > 51 && waterbill<100){
    console.log("Amount = 6/l");
 } else if( waterbill > 100){
    console.log("Amount > 100");
 }else{
    console.log("over bill");
 }

let  r = Number (prompt("Enter the number"));
let original = r;
let rev = 0;

while (r>0){
    let digit = r % 10;
    rev = rev * 10 + digit;
     r = Math.floor(r/10)
}

if(original === rev){
    console.log("It,s palindrome number", original)
} else{
    console.log("It,s not palindrome Number",original)
}


let phone = (prompt("Enter the phone number"));

if(phone.length === 10 && ["9","8","6","7"].includes(phone[0])&& /^\d{10} $/.test(phone)){
    console.log("valid phone number");
} else{
    console.log("invalid phone number");
}



