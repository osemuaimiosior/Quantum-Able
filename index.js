require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 0
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3200;

app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

/*app.get('/property-details(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'property-details.html'))
});
*/

app.get('/marketPlace(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'Properties','marketPlace.html'))
});

app.get('/contact(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
});

app.use('/luxuryVilla', require('./routes/luxuryVilla/luxury'));
app.use('/mPlace', require('./routes/mPlaceTrade/mPlaceT'));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));