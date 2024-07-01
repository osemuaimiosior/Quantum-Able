require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 0
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3200;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/contactUsData', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(name);
    console.log(message);
    res.sendFile(path.join(__dirname, 'contact.html'))
});

app.get('/marketPlace(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'Properties','marketPlace.html'))
});

app.get('/contact(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
});

app.use('/luxuryVilla', require('./routes/luxuryVilla/luxury'));
app.use('/apartment', require('./routes/apartment/apartment'));
app.use('/modernCondo', require('./routes/modernCondo/mC'));
app.use('/pentHouse', require('./routes/pentHouse/pentH'));
app.use('/mPlace', require('./routes/mPlaceTrade/mPlaceT'));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));