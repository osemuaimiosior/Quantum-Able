const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/2(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','Properties','marketPlace2.html'))
});

router.get('/3(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','Properties','marketPlace3.html'))
});

router.get('/4(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','Properties','marketPlace4.html'))
});

module.exports = router;