const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let todoList = []

app.get('/api/get_todo_list', function (req, res) {
    try {
        res.send(todoList);
    } catch (err) {
        console.log(err);
        res.send([])
    }
})

app.post('/api/add_todo', function (req, res) {
    let params = {
        title: req.body.title,
        description: req.body.description,
        calender: req.body.calender
    }
    try {
        console.log(params);
        todoList.push({
            title: params.title,
            description: params.description,
            calender: params.calender
        })
        res.send("OK")
    } catch (err) {
        res.send('error');
    }
})

app.listen(5005)