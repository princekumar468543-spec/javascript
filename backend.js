 const fs = require('node:fs');

 
 fs.writeFile("hey.text","hello prince sharma",function(err){
    if(err)console.log(err);
    else console.log("done"); 
})

fs.appendFile("hey.text"," what are you doing",function(err){
    if(err)console.log(err);
    else console.log("done"); 
})

fs.rename("hey.text","hello.text",function(err){
    if(err) console.log(err);
    else console.log("done");
})

fs.unlink("hello.text",function(err){
    if(err) console.error(err);
    else console.log("removed");  
})

fs.writeFile("hey.text","heloo sir",(err)=>{
    console.log("done")
})

fs.readFile("hey.text","utf8",(err , data)=>{
    console.log(data)
})