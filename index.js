const express = require('express')
const app = express()
const PORT = 5000
const db = require('./server/config/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome to server.")
})

const adminRoutes = require('./server/routes/adminRoutes')
app.use("/admin",adminRoutes)

const customerRoutes = require('./server/routes/customerRoutes')
app.use("/customer",customerRoutes)



app.listen(PORT, (err)=>{
    if(err){
        console.log("Error Occured in Server", err);  
    }
    else{
        console.log("Server Is Running");
    }
})