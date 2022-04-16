const express=require("express")

const app=express()
const port=3000
var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
app.listen(port,()=>{
    console.log('server started on port:'+port);
})
app.get('/',(req,res)=>{
    res.send('Authors API')
})
app.get('/authors/:id/',(req,res)=>{
    res.send(authors[req.params.id].name+" , "+authors[req.params.id].nationality)
})
app.get('/authors/:id/books',(req,res)=>{
    res.send(authors[req.params.id].books.toString())
})
app.get('/json/authors/:id',(req,res)=>{
    res.send({
        name:authors[req.params.id].name,
        nationality:authors[req.params.id].nationality
    })
})