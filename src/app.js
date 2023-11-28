const express = require ("express");

const path = require ('path');

let app = express ();

const publicPath = (path.resolve (__dirname, './public'));

app.use (express.static(publicPath));

app.listen (3030,()=>
console.log ('Esta corriendo'));

app.get ('/', (req,res)=>{
    let htmlPath = (path.resolve(__dirname,'./views/home.html'))
    res.sendFile (htmlPath)
});
app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
});

app.post("/login.html", (req, res) => {
    res.send("Llegó el formulario de login");
});

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath)
});

app.post("/register.html", (req, res) => {
    res.send("Llegó el formulario de register");
});

