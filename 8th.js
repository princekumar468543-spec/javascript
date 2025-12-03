const prompt = require("prompt-sync")();


let str = (prompt("checking"));

if (str === null || str.trim() ==="") {
    console.log("so it is a empty");
} else {

    console.log("it is not empty");
}


let d = Number(prompt("enter the number"));
 if(d%5 === 0 && d%3=== 0){
    console.log("so it is divisible by both")
 } 
 else if(d%3 === 0){
    console.log("it is divisible by 3")
} else if(d%5 === 0){
    console.log("so it is divisibleby 5")
} else if(d%5 === 0 && d%3=== 0){
    console.log("so it is divisiblr by both")
}else{
    console.log("this number are not divisible by both")
}
    

 let  age1 = Number(prompt("Enter your age"));
 let  country = (prompt("Enter your country"));

 if (country === "india"){
    if( age1 >= 18){
        console.log("Eligible");
    }
 }else{
    console.log("other country rule");
 }
    

 let password = (prompt("Enter your passowrd"));
 if (password.length>=8){
    console.log("strong password");
 } else {
    console.log("weak password");
 }
    
   let z = Number(prompt("Enter the number"));
    if (z % 10 ===0){
        console.log("Endes with zero");
    } else if(z % 2===0){
        console.log("even number");
    }else{
        console.log("odd number");
    }
        
let w = Number(prompt("Enter the Number"));

if (w === 1) {
    console.log("Monday");
}
 else if(w === 2) {
    console.log("Tuesday");
}
else if(w === 3) {
    console.log("Wednesday");
}
 else if(w === 4) {
    console.log("Thursday");
}
else if (w === 5) {
    console.log("Friday");
}
else  if (w === 6) {
    console.log("Saturday");
}
else if(w === 7) {
    console.log("Sunday");
}else{
    console.log("invalid day")
}
    
let T = Number(prompt("enter the number"));

if (T <= 10) {
    console.log("very cold");
} else if (T <= 20) {
    console.log("cold");
} else if (T <= 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}
    

let y = Number(prompt("enter the number"))

if (y % 6 === 0 ) {
    console.log("divisible by both 2,3,6");

} else {
    console.log("this are not divisble both 2,3,6");
}


let s1 = Number(prompt("Enter the s1"))
let s2 = Number(prompt("Enter the s2"))
let s3 = Number(prompt("Enter the s3"))


if (s1+s2+s3%3>=60){
    console.log("pass")

}else{
    console.log("fail")
}
    
   let age = Number(prompt("enter the number"))

   if (age<12){
    console.log("child");
   }else if(age>=12 && age===18){
    console.log("Teen");
   }else if(age>18 && age<60){
    console.log("adult");
   }else{
    console.log("senior");
   }

   

   let passowrd = (prompt("Enter the password"))
   let OTP = (prompt("Enter the OTP"))
    
 if(passowrd === "correct" && OTP === "correct"){
    console.log("Login Success");
 }else{
    console.log("Try again");
 }

 let i =  Number(prompt("Enter the timing"))

 if(i<=5){
    console.log("Morning");
 } else if(i>=6 && i<=11){
    console.log("Afternoon");
 } else if(i>=12 && i<=20){
    console.log("Evening");
 }else{
    console.log("neight");
 }
    

 let first = (prompt("Enter the first number"))
 let second= (prompt)('Enter the second number')
 
 let result = Math.abs(first-second);
 console.log(result);
 

 let digit = (prompt("Enter the number"))
 if (digit.length===3){
    console.log("it,s three digit number")
 }else{
    console.log("is not three digit no")
 }
    
   let color = (prompt("Enter the color"))
   
   if(color==="red"){
    console.log("stop");
   }else if(color==="yellow"){
    console.log("get ready")
   }else if(color==="green"){
    console.log("go away")
   }




