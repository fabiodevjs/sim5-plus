const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();  // Importa as variáveis de ambiente

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do banco de dados usando variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,  // Usa a variável de ambiente DB_HOST
    user: process.env.DB_USER,  // Usa a variável de ambiente DB_USER
    password: process.env.DB_PASSWORD,  // Usa a variável de ambiente DB_PASSWORD
    database: process.env.DB_NAME  // Usa a variável de ambiente DB_NAME
});

// Testar conexão com o banco
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

// Rota para buscar endereço pelo CEP
app.get('/api/cep/:cep', (req, res) => {
    const { cep } = req.params;
    // Aqui você pode integrar com uma API de CEP, como ViaCEP
    res.json({ cep, endereço: 'Endereço automático' });
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
