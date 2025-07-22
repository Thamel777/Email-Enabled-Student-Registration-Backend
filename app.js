const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const registerRoutes = require('./routes/register');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/register', registerRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Registration API');
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});