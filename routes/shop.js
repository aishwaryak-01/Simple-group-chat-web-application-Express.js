const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
fs.readFile('message.text', ({encoding:'utf-8'}), (err, data) => {
if(err)
{
    console.log(err);
    data = 'No Chat Exists'
}
res.send(`<html><head><title>Message</title></head><body>${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
<input type="text" name="message" id="message"><input type="hidden" name="username" id="username"><button type="submit">Send Message</button></form></body></html>`);
})
})

router.post('/', (req, res, post) => {
console.log(`${req.body.username}:${req.body.message}`);
fs.writeFile('message.text', `${req.body.username}:${req.body.message}` , {flag:'a'}, (err) => {
if(err)
{
    console.log(err);
}
})
res.redirect('/');
})
module.exports = router;
