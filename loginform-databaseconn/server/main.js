const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dbadduser = require("./adduser");

app.get("/adduser", async (req, res) => {
    try {
      // lets read the query parameter
      const input = req.query;
  
      // calling db logic :: async :: non blocking
     const resdata= await dbadduser.addUser(input);
    //   res.json({ message: "success" });
      res.json(resdata);
    } catch (err) {
      res.json({ message: "failure" });
    }
  });
app.listen(3000);