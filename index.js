import express from 'express';
import route from './src/routes/index.js';

const app = express();

app.use(route);

app.listen(8000, '192.168.1.23', () => {
  console.log(`server is listening at http://192.168.1.23:8000`);
});
