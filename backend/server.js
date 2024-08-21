const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const cors1 ={
    origin:"http://localhost:3000",
    methods:["POST","GET"]
};



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors(cors1));
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
