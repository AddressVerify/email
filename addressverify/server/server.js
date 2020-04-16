const express = require('express');
const path = require('path');
const port = 4523;
const app = express();

const db = require("../database/db");
app.use(express.static(path.join(__dirname + '../public')));
app.use(express.json());


app.post('/user', (req, res)=>{
    console.log(req.body.data);
    for(let i = 0; i < req.body.data.length; i++){
        db.userWrite(req.body.data[i]);
    }
});

app.listen(port, () => {
    console.log(`I can hear you at  ${port}`);
});
