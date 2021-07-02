const express = require("express");
const app = express();
const path = require('path');

const PORT = 8888


app.use(express.static("asset"));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'asset', 'index.html'));
});

app.listen({ port: PORT }, () =>
  console.log(`🚀 Сервер готов на адресе http://localhost:${PORT}`)
)