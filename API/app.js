
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors())

app.listen(PORT, () => console.log("Listening on port", PORT));
require("dotenv").config({ path: "./.env" })

 const bodyparser = require('body-parser');
 const edibleBunsRoutes= require('./api/routes/edibleBuns');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/edibleBuns', edibleBunsRoutes);
app.use('',(req, res, next) => {
    res.status(200).json({
        message: 'Working'
    });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method=== 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT','POST', 'PATCH','DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    const error = new Error('Not found.');
    error.status= 404;
    next(error);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});



module.exports= app;
