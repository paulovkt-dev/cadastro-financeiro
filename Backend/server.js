const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [];

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.json({ message: 'Preencha todos os campos!' });
  }

  const existe = usuarios.find(u => u.email === email);
  if (existe) {
    return res.json({ message: 'Email já cadastrado!' });
  }

  usuarios.push({ nome, email, senha });

  return res.json({ message: 'Cadastro realizado com sucesso!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});