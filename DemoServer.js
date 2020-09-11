let http = require("http")

let ourApp = http.createServer(function(req, res){
  if(req.url == "/"){
   res.end("Hello, welcome to Home Page ..... ")
} 
if (req.url == "/about"){
    res.end("Hello, welcome to About Page ..... ") 
}

if (req.url == "/info"){
    res.end("Hello, welcome to Info PAge ..... ") 
}

res.end("Can not find the page")

})
ourApp.listen(3000)
