const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.listen(8000, () => {
  console.log(`server is listening at http://localhost:8000`);
});
