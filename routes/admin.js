const express = require('express');
const router = express.Router();
router.get('/login', (req, res, next) => {
res.send('<html><head><title>Form</title></head><body><form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login" method="POST"><input type="text" id="username" name="username" placeholder="Enter your username"><button type="submit">Login</button></form></body></html>');
})
router.post('/login', (req, res, next) => {
res.redirect('/');
})
module.exports = router;
