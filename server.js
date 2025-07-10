const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/contato', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/views/contato.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});