const express = require('express')
var expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars',expressHandlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.get('/test',  (req, res) => {
    console.log("testing")
    res.render('test');
    });
    
app.listen(3000,() => console.log('App is listening to port 3000'))