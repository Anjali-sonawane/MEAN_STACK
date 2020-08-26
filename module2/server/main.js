
const http = require("http");

const list1 = require("./res");

http.createServer((res,req) =>{
    res.setHeader("Access-Control-Flow-Origin","http://localhost:5600/");
    const myres = JSON.stringify(list1.array);
    res.end(myres);

}).listen(5600);