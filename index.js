const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('form');
});

app.post('/generate-id', (req, res) => {
    const { name, age, email, phone, type } = req.body;
    const idCardData = { name, age, email, phone, type, id: generateId() };
    res.render('idCard', { idCardData });
});

function generateId() {
    return 'ID' + Math.floor(Math.random() * 10000);
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
