const express = require('express');
const mySql = require('mysql2');
const dotenv = require('dotenv')

dotenv.config();
const app = express();
const port = process.env.API_PORT || 3000;

const artisteRouter = require('./routes/artisteRouter');
const museeRouter = require('./routes/museeRouter');
const toileRouter = require('./routes/toileRouter');

app.use(express.json());

app.use('/api', artisteRouter);
app.use('/api', museeRouter);
app.use('/api', toileRouter);


app.get('/', (req, res) =>{
    res.send("Bienvenue dans l'API de la Virtual Gallery !");
})



app.listen(port, ()=>{
    console.log(`L'API est en cours d'execution sur le port ${port}`);
})
