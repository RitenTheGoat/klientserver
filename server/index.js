const express = require('express')
const app = express()

const cors= require('cors')

app.use(cors())


const port = 3000
var todolist = [
    {'task': 'zadanie1'},
    {'task': 'zadanie2'},
    {'task': 'zadanie3'},
    {'task': 'zadanie4'},
    {'task': 'zadanie5'},
]

app.get('/',function(req, res) {
    res.send("ok")
    console.log("request on root endpoint")
})
app.get('/gettodos', function(req, res){
    res.json(todolist)
    console.log("request on get todos endpoint")
})
app.get('/add/:nazwa', function(req,res){
    const nazwa= req.params.nazwa

    console.log(nazwa)


    const tmp_obj = {"task": nazwa}

    todolist.push(tmp_obj)

    res.send("dodano zadanie")
})
app.listen(port)