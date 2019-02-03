
const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.render('index', {'title':'Express App', 'message':'This is the home page of my express app...'});
});

module.exports = router;