const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const authRoutes = require('./routes/auth-user');
const verifyToken= require('./middleware/verify-token');

// app.get('/hello',verifyToken,(req,res)=>{
//     res.json({hello:'hello'});
// });

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.cjkig.mongodb.net/myFirstDatabase')
.then(()=>{
    console.log('connect to db');
})
.catch(()=>{
    console.log('connection failed!');
});

// middleware
app.use('/api',authRoutes);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`running on port: ${port}`);
});

