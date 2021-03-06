
let exprees = require('express')         //to acces all the express modules and tags of Html
let mongodb = require('mongodb')        // for database  


let app = exprees()                //  
let db 

app.use(exprees.static('public'))


// declare a var db 
//connection to db(mongoDB) with username,password and the table name
let connectionsString = 'mongodb+srv://USERNAME:PASSWORD@cluster0.3dbfe.mongodb.net/DBNAME?retryWrites=true&w=majority'

mongodb.connect(connectionsString, {useNewUrlParser: true}, function(err,clinet){
  db = clinet.db()
  app.listen(3000)
})

//access from url
app.use(exprees.json())
app.use(exprees.urlencoded({extended:false}))

//get request from user to send url html home page
app.get('/',function(req, res){ 
  db.collection('items').find().toArray(function(err,items){       //call db to find the items from the db where find() method to find all the items(DB table) and store it in array
    res.send(`
    <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1">To-Do App</h1>
      
      <div class="jumbotron p-3 shadow-sm">
        <form id="create-form" action="/create-item" method="POST">
          <div class="d-flex align-items-center">
            <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
            <button class="btn btn-primary">Add New Item</button>
          </div>
        </form>
      </div>
      
      <ul id="item-list" class="list-group pb-5">
      
      </ul>
    </div>


  <script>
  let items = ${JSON.stringify(items)}

  </script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="/browser.js"></script>
  </body>
  </html>`)
 
})

})

//response from server
app.post('/create-item',function(req, res){
    //insert query for insert string into database 
    db.collection('items').insertOne({text: req.body.text},function(err, info){
       res.json(info.ops[0])
    })
})


app.post('/update-item', function(req,res){
  db.collection('items').findOneAndUpdate({_id: new mongodb.ObjectId(req.body.id)}, {$set:{text: req.body.text}}, function(){
    res.send("Success")
  })
})

app.post('/delete-item', function(req, res){
  db.collection('items').deleteOne({_id: new mongodb.ObjectId(req.body.id)},function(){
    res.send("success")
  } )
})
