const express = require("express");

const app = express();

app.get('/', function(request, response) {
    response.send("Olá Mundo!");
});

app.listen(3000, function() {
    console.log('Servidor iniciado na porta 3000!');
});