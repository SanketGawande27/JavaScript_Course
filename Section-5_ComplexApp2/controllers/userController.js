const User = require('../models/User')


exports.login = function(){

}
exports.logout = function(){
    
}

exports.register = function(req, res){
    let user = new User(req.body)           //create a new object
   user.register()
   if(user.errors.length){
      res.send(user.errors)
   }else{
     res.send("Congrates.....")
   }
}

exports.home = function(req, res){
    res.render('home-guest')
    
}