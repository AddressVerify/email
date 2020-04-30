const express = require('express');
const path = require('path');
const port = 4523;
const app = express();
const {verify} = require('../src/data/checkfx');
// const db = require("../database/db");
app.use(express.static(path.join(__dirname + '../public')));
app.use(express.json());


// app.post('/user', (req, res)=>{
//     console.log(req.body.data);
//     for(let i = 0; i < req.body.data.length; i++){
//         db.userWrite(req.body.data[i]);
//     }
// });

app.post('/verify', (req, res) => {
    let resultsArray = [];
    req.body.data.forEach((email) => {resultsArray.push(verify(email, req.body.inactive, req.body.jobSet))
        })
        Promise.all(resultsArray)
        .then((result) => {res.send(result)})
        .catch((err) => console.log(err));	
    // let resultsArray = [];
    // req.body.data.forEach((email, index) => {verify(email, req.body.inactive, req.body.jobSet)
    //     .then((result) => {
    //         resultsArray[index] = result
    //      if(index === req.body.data.length - 1){
    //         Promise.all(resultsArray).then((result) => {res.send(result)})
    //      }   
    //     })
    //     .catch((err) => console.log(err));	
    // }) 
})


app.listen(port, () => {
    console.log(`I can hear you at  ${port}`);
});
