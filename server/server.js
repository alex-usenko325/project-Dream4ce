import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/reviews', (req, res) => {
  res.json([
    { text: 'Відгук 1', img: 'img1.jpg', name: "Ім'я 1" },
    { text: 'Відгук 2', img: 'img2.jpg', name: "Ім'я 2" },
  ]);
});

app.listen(3000, () => {
  console.log('Сервер працює на порту 3000');
});
