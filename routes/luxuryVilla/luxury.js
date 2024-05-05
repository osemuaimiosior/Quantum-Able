const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/97219(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','97219.html'))
});

router.get('/27001(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','27001.html'))
});

router.get('/38540(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','38540.html'))
});

router.get('/36450(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','36450.html'))
});

router.get('/12870(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','12870.html'))
});

router.get('/24650(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','luxuryVillaProp','24650.html'))
});

module.exports = router;