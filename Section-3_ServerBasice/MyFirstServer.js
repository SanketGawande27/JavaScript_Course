let express = require("express")
let MyApp = express()

MyApp.use(express.urlencoded({extended: false}))

MyApp.get('/', function(req, res){
    
   res.send(`

   <form action = "/dashboard" method ="POST">
   <center>
    <p><h2> Welcome to ProBlogger </h2></p>
    <input type = "text" name="userid" autocomplete="off" placeholder ="UserName or Email"><br>
    <input type = "password" name="userpass" autocomplete="off" placeholder ="Password"><br>
    <button onclick="login()"> Login </button>
    <button  id= "bt2" onclick="signup()">SignUp </button>
    
   </center>
   </form>
   
   `)

})


MyApp.post('/dashboard', function(req, res){

  
    if (req.body.userid == "admin" && req.body.userpass == "admin111")
      res.send(`
    <h2> Congrats Login Successfulll ...... </h2>
       <a href="/"> Logout </a>
    `)
    else{
        res.send(`
        <h2> Login to failed </h2>

        `)
    }

})


document.getElementById("bt2").addEventListener("click", signup);
function signup(){  
    res.send(`<center>
    <p><h2> Register on ProBlogger </h2></p>
    <input type = "text" name="username" autocomplete="off" placeholder ="Full Name"><br>
    <input type = "text" name="useremail" autocomplete="off" placeholder ="Email"><br>
    <input type = "text" name="usermobile" autocomplete="off" placeholder ="Mobile Number"><br>
    <input type = "password" name="userpassword" autocomplete="off" placeholder ="Password"><br>
    <input type = "password" name="userconformpassword" autocomplete="off" placeholder ="Conform Password"><br>
    <button onclick="submit()"> Submit </button>
    <button onclick="cancel()"> Cancel </button>
   </center>
   `)

}

MyApp.listen(3000) 