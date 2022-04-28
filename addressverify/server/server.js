const express = require('express');
const path = require('path');
const app = express();
const {verify} = require('../src/data/checkfx');
// const db = require("../database/db");
app.use(express.static(path.join(__dirname + '../public')));
app.use(express.json());
const port = process.env.DB_PORT || 3001;
// working db route
// app.post('/user', (req, res)=>{
//     console.log(req.body.data);
//     for(let i = 0; i < req.body.data.length; i++){
//         db.userWrite(req.body.data[i]);
//     }
// });

app.post('/verify', (req, res) => {
    // console.log(req.body.data)
    let resultsArray = [];
    req.body.data.forEach((email) => {
        resultsArray.push(verify(email, req.body.inactive, req.body.jobSet))
        })
        Promise.all(resultsArray)
        .then((result) => {
            // console.log(result);
            res.send(result)
        })
        .catch((err) => res.send(err));	
})

app.post('/collection', (req, res) => {
    res.send(req.body.data)
})


app.listen(port, () => {
    console.log(`I can hear you at  ${port}`);
});
