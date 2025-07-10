const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/contato', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/views/contato.html'));
});

app.get('/api/lanches', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '/public/data/lanches.json'));
    res.json(JSON.parse(data));
});


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});