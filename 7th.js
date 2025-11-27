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
    

    const prompt = require("prompt-sync")();



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
 */
let p = Number(prompt("enter the password"));
if(p === 1234){
    console.log("correct password" + p)
}else{
    console.log("wrong password" + p)
}

