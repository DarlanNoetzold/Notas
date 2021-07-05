const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({
        nome: 'Hello World!',
        teste: "asdas",
    });
});


app.listen(3330);
