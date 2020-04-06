const express = require('express');
const path = require('path');
const port = 4523;
const app = express();

app.use(express.static(path.join(__dirname + '../public')));
app.use(express.json());


app.listen(port, () => {
    console.log(`I can hear you at  ${port}`);
});
