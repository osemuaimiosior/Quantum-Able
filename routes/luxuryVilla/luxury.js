const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/97219(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','97219.html'))
});

module.exports = router;