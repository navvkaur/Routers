
const express = require('express');
const bodyParser=require('body-parser');

const app = express();

const adminRoutes = express('./Routes/admin');
const shopRoutes = express('./Routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use('/',(req,res,next)=>
{
    res.status(404).send('<h1>Page not found</h1>');
})
app.listen(3000);
