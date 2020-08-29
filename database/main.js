
const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
console.log("read database");

let database = async ()=>{
    try{
        console.log("read database");

        const Connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "@Anjali2410",
            database: "user",
        });

        await Connection.connectAsync();
        console.log("connection successful");
        await Connection.endAsync();

    }catch(err){
        console.log(err);
    }
};

database();