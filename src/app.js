const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola saludo LOCAL, PROBANDO OTRA VEZCONFLICTOS');
});

app.get('/saludo', (req, res) => {
  const nombre = req.query.nombre?.trim() || 'Mundo';
  res.send(`Hola ${nombre}`);
});
  
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
