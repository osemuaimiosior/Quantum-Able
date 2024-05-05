const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/12650(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','12650.html'))
});


module.exports = router;