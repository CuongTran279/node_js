const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const handlebarsEngine = handlebars.create({
  extname:'.hbs'
});
const app = express();
const port = 3000;
// Lấy link ảnh
app.use(express.static(path.join(__dirname,'resources')))
app.use(morgan('combined'));
app.engine('hbs', handlebarsEngine.engine);
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));
// console.log(path.join(__dirname,'resources/views'));
app.get('/', function (req, res) {
  res.render('home')
})
app.get('/news', function (req, res) {
  res.render('news')
})

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})