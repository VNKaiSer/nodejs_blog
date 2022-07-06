const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path = require('path')
const hbs = require('express-handlebars');

app.use(morgan('combined'))

// Temple handlebars

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));



// console.log('PATH: ' + path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})