import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    hello: 'I am allive',
  });
});

app.listen(3000);
