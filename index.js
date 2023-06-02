const express = require('express');
const app = express();
const userRouter = require('./routes/userController');
const helloMiddleware = require('./middleware/helloMiddleware');


app.use(helloMiddleware);
app.use(express.json());
app.listen('3000');

//GET: HOME
app.get('/',(req, res) => {
    res.send('Hola');
});

app.use(userRouter);