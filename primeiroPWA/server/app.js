const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const Client = mongoose.model('Client', clientSchema);

// Rota para cadastrar cliente
app.post('/api/clients', async (req, res) => {
  const { name, email, phone } = req.body;
  const client = new Client({ name, email, phone });
  await client.save();
  res.json(client);
});

// Rota para listar todos os clientes
app.get('/api/clients', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
