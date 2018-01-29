const express = require('express')
var expressHandlebars = require('express-handlebars')
const app = express()
const markdownJson = require('metalsmith-markdown');
var fs = require('fs');
var marked = require('marked')
var path = require ('path');

app.engine('handlebars',expressHandlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'views/layouts'));

app.get('/:id', function(req, res) {
    fs.readFile('content/' + req.params.id + '/index.md', 'utf8', function (err,content) {
    if (err) {
        res.status(404).send('Error: 404 , Page not found!');
    }
    else {
        var parsedContent = marked(content)
        console.log(parsedContent)
        res.render('main',{body:parsedContent})
        }
    });
    });
    
app.listen(3000,() => console.log('App is listening to port 3000'))