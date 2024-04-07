const app =require('./app');
const cloudinary = require("cloudinary");
const connectDatabase = require('./config/database')
const dotenv= require('dotenv');
//handling uncaught exception like for e.g clg(youtube);
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to UncaughtException`);
        process.exit(1);
    
});

// console.log(youtube);

//Config
dotenv.config({path: "config.env"});

//Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const server = app.listen(process.env.PORT,()=> {
    console.log(`Server is working on https:localhost:${process.env.PORT}`);
})

// console.log(youtube);
//Unhandled Promise Rejection for mongodb errors like mongo connection string wrong
process.on("unhandledRejection",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejction`);
    
    server.close(()=>{
        process.exit(1);
    })
});