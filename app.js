const express=require('express')
const DB=require('./config/db')
require('dotenv').config()
const cookieParser = require("cookie-parser");

const app=express()
const cors = require("cors");
const {router}=require('./Routes/User')
const bodyParser=require('body-parser')
const main=async()=>{
    try {
        await DB.authenticate()
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main()

const corsOptions = {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:8080",
    ],
    optionsSuccessStatus: 200,
    credentials: true,
  };



app.use(cors(corsOptions));
app.use(cookieParser());
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('Server is Properly Runing')
})

app.use('/api/v1',router)

app.listen(8080,()=>{
    console.log(`Server is Started Port No: ${8080}`)
})