// Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose.

// require('dotenv').config({
//     path: './.env'
// })
import dotenv from 'dotenv';
import connectDB from './db/connection.js';
dotenv.config({
    path: './.env'
})


connectDB()




















/*
import express from 'express';
const app = express();

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log('Error connecting to DB', error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`)
        })

    }catch(error){    
        console.log("ERROR",error)
        throw error
    }

})()
*/