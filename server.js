const express= require('express');
const cors = require('cors');
const mongoose= require('mongoose');
const requireDir= require('require-dir');

// Iniciando o App
const app= express();

app.use(express.json());
app.use(cors());

// Iniciando o BD

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true })

requireDir('./src/models');

// Rotas
app.use('/', require("./src/routes"));

app.listen(7777, ()=>{
    console.log("Servidor rodando");
});

