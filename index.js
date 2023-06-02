const express = require('express');
const app = express();
const userRouter = require('./routes/userController');

app.use(express.urlencoded({extended : false}));
app.listen('3000');

//GET: HOME
app.get('/',(req, res) => {
    res.send('Hola');
});

app.use(userRouter);