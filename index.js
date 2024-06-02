require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
  res.status(200).json({
    result: 'Control de stock ISP'
  });
});

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
