const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/sugestao', (req, res) => {
    const { nome, ingredientes } = req.query;

    res.status(200).send(`
    <a href="/">
        <button type="button">Ir para Index</button>
    </a>
    <h1>Obrigado pela sugestão, ${nome}!</h1>
    <p>Você sugeriu os ingredientes:${ingredientes}.</p>
  `);
});

app.get('/contato', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/views/contato.html'));
});

app.post('/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;
    res.status(200).send(`
    <a href="/">
        <button type="button">Ir para Index</button>
    </a>
    <h1>Obrigado pelo contato, ${nome}!</h1>
    <p>Email: ${email}</p>
    <p>Assunto: ${assunto}</p>
    <p>Menssagem enviada: ${mensagem}</p>
    `);
});

app.get('/api/lanches', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '/public/data/lanches.json'));
    res.json(JSON.parse(data));
});

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/public/404.html'))
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});