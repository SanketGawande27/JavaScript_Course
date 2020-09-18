const express = require('express')                
const app = express()

const router = require('./router')  //connect to the router folder for the operations and store data within router var

app.use(express.urlencoded({extended:false}))    //it tells express to add usersubmited data on to ur request object
app.use(express.json())



app.use(express.static('public'))   // is use for to inculude css 
app.set('views','views')   //tells which will be open
app.set('view engine','ejs')   //telss use ejs engine


app.use('/',router)
app.listen(3000)