const prompt = require("prompt-sync")();

let recharge = Number(prompt("Enter your Plan = "))

if(recharge===99){
   console.log("validty for 28 days")
}else if(recharge===199){
   console.log("validty for 35 days")
}else if(recharge===299){
   console.log("validty for 56 days")
}else{
   console.log("invalid")
}
   

let ticket = (prompt("Enter the timing = "))
if(ticket==="Morning"){
   console.log("prize = 120Rupees");
} else if(ticket==="Afternoon"){
   console.log("Prize = 150Rupees");
} else if(ticket==="Neight"){
   console.log("Prize = 200Rupees");
}else{
   console.log("Not Found slot");
}
   

let month = Number(prompt("Enter the month no."))

if(month===2){
   console.log("In this month 28 days")
}

else if(month===8){
   console.log("In this month 31 days")
}

else if(month%2===0){
   console.log("In this months 30 days")
} else if(month%2===1){
   console.log("In this month 31 days")
}
   

let pincode = (prompt("Enter the pincode"))

if(pincode.length===6){
   console.log("valid pincode");
}else{
   console.log("invalid pincode");
}
   

let bill = Number(prompt("Enter the bill"))

let cost = 0;

if(bill>=0 && bill<=100){
   cost = bill*5;
   console.log("1unit = 5/unit")
} else if(bill>100 && bill<=300){
   cost = bill*7;
   console.log("1unit = 7/unit")
}else if(bill > 300){
   console.log("1unit = 10/unit")
}else{
   console.log("invalid bill value")
}

console.log("Amount = ",cost);

 

let bodytem = Number(prompt("Enter the temperature"))

if(bodytem <= 97){
   console.log("body temperature = low")
}else if(bodytem >97 && bodytem<=99){
   console.log("bodytemperature = Normal")
}else if(bodytem > 99){

   console.log("Fever")

}else{
   console.log("very low temperature")
}
   

let username = (prompt("Enter the username"));
let password = (prompt("Enter the Password"));
let captcha = (prompt("Enter the captcha"));
if (username === "correct" && password === "correct" && captcha === "correct") {
 console.log("login succesful")
}else{
console.log("wrong input ")
}


let Amount = Number(prompt("Enter the Amount"))
let blance = 10000;
 if (Amount < blance){
    console.log("withdrawal succeess")
 }else{
    console.log("Insufficient balance")
 }
    
   let speed = Number(prompt("Enter the speed"))

   if(speed <= 5){
    console.log("slow")
   }else if(speed <=20){
    console.log("Average")
   }else if(speed <=100){
    console.log("Fast")
   }else{
    console.log("very fast")
   }






