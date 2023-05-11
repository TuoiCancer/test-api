const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(8000, () => {
  console.log(`server is listening at http://localhost:8000`);
});
