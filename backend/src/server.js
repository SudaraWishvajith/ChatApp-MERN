const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const env = require('dotenv');

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async(req,res) =>{
    const { userName } = req.body;

    try{
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: userName, secret: userName, first_name: userName },
            { headers: { "Private-Key": `${process.env.SECRET}`}}  
        );
        return res.status(r.status).json(r.data);
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001,() => {
    console.log("server running");
});