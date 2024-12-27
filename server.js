import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;


app.use(json());
app.use(cors());


let visitorCount = 0;


app.get('/api/visitor-count', (req, res) => {
  res.json({ count: visitorCount });
});


app.post('/api/visitor-count', (req, res) => {
  visitorCount++;
  res.json({ count: visitorCount });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
