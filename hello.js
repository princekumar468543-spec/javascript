import fs from "fs";



 // non - blocking
console.log(1)

  fs.readFile("hey.text","utf-8",(err,result)=>{
    console.log(result)
 });
 

 console.log(2)
 console.log(3)


 // blocking
 fs.readFileSync("hey.text","utf-8",(err, result)=>{
  console.log(result)
 })