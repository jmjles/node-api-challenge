const Express = require('express')
const app = Express()
const actionRoute = require('./routes/actionRoute')
const projectRoute = require('./routes/projectRoute')
const Port = process.env.PORT || 5000

app.use(Express.json())
app.use('/api/projects/',projectRoute)
app.use('/api/actions/',actionRoute)
app.use('/',(req,res)=>res.status(200).send('Server is Running'))

app.listen(Port,()=>console.log(`Server is running on Port:${Port}`))