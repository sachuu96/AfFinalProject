const Express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./Route');
var Cors		= require('cors');

var app=Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());
app.use('/', Routes);

app.listen('8081','localhost',function(err){
    if(err){
        console.log('Connection Error : ' +err);
        process.exit(-1);
    }
    console.log('Server is listening on port 8081');
});