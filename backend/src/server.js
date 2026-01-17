import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`digital behavior twin backend is running on port ${PORT}`);
});
