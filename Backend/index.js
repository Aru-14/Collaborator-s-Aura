const express = require('express');

const app= express();

const cors = require('cors');
const authRoutes = require('./Routes/auth');


require('dotenv').config();
require('./Models/db');
const PORT=process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hello World!");
})

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

