const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>
{
    //console.log("I am another Middleware");
    res.send(`<form action = "/product" method="POST" >
    <label for="product">Product:</label><br>
    <input type="text" id="product" name="product" ><br>
    <label for="size">Size:</label><br>
    <input type="number" id="size" name="size" ><br><br>
    <input type="submit" value="Submit">
  </form> `);
    
});
router.post('/add-product',(req,res,next)=>
{
    console.log(req.body);
    //res.redirect('/');
    
});

module.exports=router;