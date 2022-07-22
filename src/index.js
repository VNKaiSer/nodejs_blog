const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path = require('path')
const hbs = require('express-handlebars');
const route = require('./routes')
const db = require('./config/db')

//Connect db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Temple handlebars

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})