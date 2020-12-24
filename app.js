var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("hello world");
});

app.use(express.static('public'));
//=========================
const port = process.env.PORT || 3070;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});