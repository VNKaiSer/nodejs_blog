const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const path = require('path')
const hbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

// Temple handlebars

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



// console.log('PATH: ' + path.join(__dirname, 'resources/views'))

// Trang chủ
app.get('/', (req, res) => {
    res.render('home')
})

// TRang tin tức
app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})