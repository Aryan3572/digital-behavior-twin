import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.send("digital behavior twin backend is running");
})

export default app;