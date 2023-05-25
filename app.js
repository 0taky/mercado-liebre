const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '/Views/home.html'))
})
app.get('/login',(req, res) => {
    res.sendFile(path.join(__dirname, '/Views/login.html'))
})
app.get('/register',(req, res) => {
    res.sendFile(path.join(__dirname, '/Views/register.html'))
})