const Express = require('express');
const app = Express();

app.use('/',(req,res)=>res.send('we are in'))

module.exports = app