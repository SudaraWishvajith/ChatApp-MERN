const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async(req,res) =>{
    const { userName } = req.body;
    return res.json({
        userName: userName, 
        secret: ""
    });
});

app.listen(3001,() => {
    console.log("server running");
});