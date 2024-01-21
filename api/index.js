const express=require('express');
const cors=require('cors');
const { mongoose } = require('mongoose');
const app=express();

app.use(cors());

// to parse json from req we create this  middleware
app.use(express.json());


const dotenv = require('dotenv');
dotenv.config();

const password = process.env.MONGODBPASSWORD;

mongoose.connect(`mongodb+srv://zcdfqwft03:${password}@cluster0.khn3vjo.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    console.log(req.body)
    console.log(res.body)
    res.json({requestData:{username,password}});
});





app.listen(4000);
