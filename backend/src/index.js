const express = require ('express');
const cors = require ('cors')

/*Importando um arquivo do diretório que o atual, cahmado routes*/
const routes = require ('./routes');

const app =  express();

//origin: 'https://meuapp.com.br'//
app.use(cors());
app.use(express.json());
app.use(routes); //E de extrema importância que este comando esteja em baixo do express.jason


app.listen(3333);