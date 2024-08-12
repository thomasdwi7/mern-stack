import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'



mongoose.connect('mongodb://localhost:27017/mongodb-mern').then(()=>{console.log("database connect")}).catch((err)=>{console.log("database error")})

const app = express();

app.listen(3000, () =>{
    console.log("Server running ")
})