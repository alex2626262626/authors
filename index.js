const express = require('express');
const port = 5000;

const app = express();


// Routes
app.get('/', (req, res) => {
  res.send('Beautiful homepage');
});
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});
app.get('/hola/football',(req,res)=>{
    res.send('football')
})

// Run server
app.listen(port, () => {
});