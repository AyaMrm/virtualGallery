const express = require('express');
const mySql = require('mysql2');
const dotenv = require('dotenv')

dotenv.config();
const app = express();
const port = process.env.port || 3306;

app.use(express.json());



app.get('/', (req, res) =>{
    res.send("Bienvenue dans l'API de la Virtual Gallery !");
})

app.listen(port, ()=>{
    console.log(`L'API est en cours d'execution sur le port ${port}`);
})
