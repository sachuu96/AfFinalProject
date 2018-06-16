'use strict'

const Express = require("express");
var Cors = require('cors');

const app = Express();
const Routes = require('./Routes');


const BodyParser = require("body-parser");

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Cors());

app.use('/', Routes);

app.listen(8081, 'localhost', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log("server is listening to port 8081....");
})
