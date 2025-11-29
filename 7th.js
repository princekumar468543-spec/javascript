const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
let x = 10;

if (x > 10) {
    console.log("greater");
} else {
    console.log("not greater");
}


rl.question("Enter the number:",
function(num) {
num = Number(num);


if(num % 2=== 0){
    console.log("even");
} else{
    console.log("odd");
}
rl.close();
});

   
rl.question("Enter the temperature" ,
    function(temperature){
    temperature= Number(temperature);

        if(temperature > 30){
            console.log("hot");
        } else{
            console.log("cold")
        }
        rl.close();
    });
    
   rl.question("enter the age" ,
    function(age){
        age = Number(age);
    
    if(age>18){
        console.log("adult")
    } else{
        console.log("Minor")
    }
    rl.close();
});


rl.question("Enter the marks",
    function(marks){
        marks = Number(marks);
    if(marks>35){
        console.log("pass")
    } else{
        console.log("fail")
    }
    rl.close();
});

rl.question("enter the number",
    function(num){
        num = Number(num);
        if(num===0){
            console.log("zero")
        }else if (num > 0){
            console.log("positive number")

        } else if(num<0){
            console.log("Negative number")
        
        }else{
            console.log("not a number");
        }
        rl.close();
    });
 */

    const prompt = require("prompt-sync")();


/*
 let  a = Number(prompt("enter the first number ="));
 let  b = Number (prompt("enter the second number ="));
 let  c = Number (prompt("enter the third number ="));

 let largest;

 if(a>=b&&a>=c){
    largest = a;
 } else if(b>a&&b>c){
    largest = b;
 }else if(c>a&&c>b){
    largest = c;
 }
 console.log("this is largest no", + largest);
 
let p = Number(prompt("enter the password"));
if(p === 1234){
    console.log("correct password =" + p)
}else{
    console.log("wrong password =" + p)
}


let  ch =(prompt("Enter the charcter"));
 if ( 
    ch === "a"||
    ch === "e"||
    ch === "i"||
    ch ===" o"||
    ch === "u")
    {
    console.log("It,s a vowel " + ch);
 }else{
    console.log("It,s a constant" + ch);
 }

 let status = prompt("enter the status");

if (status.toLowerCase() === "on") {

    console.log("bulb is glowing = " + status);
} else if (status.toLowerCase() === "off") {
    console.log("bulb is off = " + status);
} else {
    console.log("invalid input");
}



let a = Number(prompt("enter the year"));
let leapyear;

if(a%4===0){

    leapyear = true;
    console.log("its is leap year =" + leapyear);
} else{
    leapyear = false;
    console.log("it is not leap year =" + leapyear);
}


let b = Number(prompt("Enter the current time"))

if(b<12){
    console.log("good morning");
} else if(b<18){
    console.log("good aftermoon");
} else {
    console.log("good Evening");
}


let score = Number(prompt("Enter the score"));



if(score>90){
    
    console.log(" grade is A+ = " + score);
} else if(score>80){
    console.log("grade is B+ = " + score);
}else if(score>70){
    console.log("grade is  = " + score);   
}else{
    console.log("fail = " + score);
}


let ch = (prompt("Enter the your role = "));
if (ch==="admin"){
    console.log("Enter your admin email" );
} else if (ch==="user"){
    console.log("Enter the user email");
} else if (ch==="guest"){
    console.log("Enter the guest email");
} else{
    console.log("invalid person");
}


let angle1 = Number(prompt("Enter first angle ="));
let angle2 = Number(prompt("Enter second angel ="));
let angle3 = Number(prompt("Enter the third angle ="));


if(angle1+angle2+angle3===180){
    console.log("valid");

}else{
    console.log("invalid");
}


let salary = Number(prompt("Enter your salary ="));

let tax;

if(salary>50000){
      tax =  salary*0.10;
} else{
    tax = salary*0.05
}
console.log("total tax = ",tax);



let Electricity = Number(prompt("Enter your units"));

let units;

if (Electricity<=100){
    units = Electricity*5;
} else if(Electricity<=200){
    units = Electricity*7;
}

console.log("it is your bill",units);


let attempt  = Number(prompt("Enter the attempt"));

if(attempt>3){
    console.log("Account locked",attempt);
}else{
    console.log("try again",attempt);
}
    */

let speed =  Number(prompt("Enter the speed"));

if(speed>100){
    console.log("overspeed")
}else if(speed<40){
    console.log("Slow")
}else{
    console.log("Normal")
}