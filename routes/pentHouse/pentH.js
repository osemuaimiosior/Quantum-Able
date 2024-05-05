const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/42680(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','42680.html'))
});

module.exports = router;