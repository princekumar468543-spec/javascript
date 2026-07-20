// htttp server banao(without Express)

const http =  require("http");


const fs = require("fs")




// server create on http

const server =   http.createServer((req , res)=>{
      res.write("hello")
      res.end()
})

 server.listen(3000, ()=>{
    console.log("http://localhost:3000")
 })

 

  


