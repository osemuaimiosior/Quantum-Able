const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/16540(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','16540.html'))
});

module.exports = router;