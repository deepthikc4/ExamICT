const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT;
const app=new express();
app.use(morgan('dev'));

const taskRoute=require('./routes/taskRoutes');

const cors=require('cors');
app.use(cors());

app.use('/api',taskRoute);




const db=require('./db/mongoDb');




app.listen(PORT,(req,res)=>{

    console.log(`Server is running ${PORT}`);
})