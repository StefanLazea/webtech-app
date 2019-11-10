const express = require('express')
const fs = require('fs')
const app = express()

//middleware
app.use('/', express.static('frontend'))
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

//GET /contact
app.get('/contact', function(request, response){
    var content = fs.readFileSync('contact.html')
    response.type('text/html').send(content)
})

//GET /messages

app.get('/messages', function(request, response) {
    var messages = [];
    var message = {
      name: "Stefan",
      message: "Hello fromn the other side"
    };
    messages.push(message);
    response.send(messages);
})

//GET /messages/:id

app.get('/messages/:id', function(request, response) {
    response.send("Am apelat GET /messages/" + request.params.id);
})

//POST /messages

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/messages', function(request, response){
    console.log(request.body);
    response.send("Am apelat POST /messages");
})


//PUT /messages/:id

//DELETE /messages/:id

app.listen(3000)