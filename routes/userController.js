const express = require('express');
const router  = express.Router();

// GET: /users
router.get("/users",(req,res) =>{
    res.send('Users ');
})

//POST: /users
router.post("/users",(req,res)=>{
    res.send('created user');
})

module.exports = router;
