const  express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty');
const { default: mongoose } = require('mongoose');

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use('/student',studentRoute)
app.use('/faculty',studentRoute)


app.use((req,res,next)=>{
    res.status(404).json({
        error:"Page Not Found"
    })
})
 
mongoose.connect('mongodb+srv://abc:Mishraji@cluster0.afez1wk.mongodb.net/?retryWrites=true&w=majority') 

mongoose.connection.on('error', err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connection successful');
});
// app.use((request,res,next)=>{
//     res.status(200).json({
//         message:'app is running'
//     })
// })

module.exports = app;