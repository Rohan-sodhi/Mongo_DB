const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mongo_db")
.then(()=>{
    console.log("DB Connected");
    
})
.catch((err)=>{
    console.log("Error in DB Connection", err);
    
})