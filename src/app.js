const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Dobro došao u Project Remzo API' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
