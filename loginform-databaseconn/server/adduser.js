/*const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "@Anjali2410",
  database: "user1",
};

let adduser = async (input)=>{
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();
        let sql = 
            "INSERT INTO userdemo (ID,USERNAME,EMAIL) VALUES (?,?,?)";
            await Connection.query(sql,[
            input.id,
            input.username,
            input.email,
            ]);
   await Connection.endAsync();
};

module.exports={adduser};
*/
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "@Anjali2410",
  database: "user1",
};

let addUser = async (input) => {
    try{

        const Connection = mysql.createConnection(DB_CONFIG);
        await Connection.connectAsync();
//   const connection = mysql.createConnection(DB_CONFIG);
//   await connection.connectAsync();

  let sql ="INSERT INTO userdemo (id, username, email) VALUES (?, ?, ?)";
  
  const data=await Connection.queryAsync(sql, [
    input.id,
    input.username,
    input.email,
  ]);
  
  await Connection.endAsync();
  console.log(data);
  return data;
}catch(err){
    console.log(err);
}
};

module.exports = { addUser };