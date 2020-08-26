

const http = require("http");
const list =  require("./mod1"); //local
http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5600/");
    const myres = JSON.stringify(list.list1);
    res.end(myres);
}).listen(5600);