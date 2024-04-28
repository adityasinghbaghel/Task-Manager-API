const express = require('express');
const app = express();
const port = 5000;
const Validator = require('./helpers/validator')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const tasks = [
    {
      "id": 2,
      "title": "Create a new project",
      "description": "Create a new project using Magic",
      "completed": false
    }]

app.get('/tasks', (req,res) => {
    res.status(200).json(tasks)
})


app.get('/tasks/:id', (req,res) => {
    const id  = req.params.id
    const data = tasks.find((task) => task.id == parseInt(id))
    res.send(data)
})


app.post('/tasks', (req,res) => {
    const data  = req.body

    data.id = tasks.length + 1; 
    tasks.push(data);
    res.send(data)

    if(Validator.validtaskInfo(data).status == true){
        return res.status(201).json(newTask);
    }
    else{
        console.log('Invalid data')
    }
    
})

app.put('/tasks/:id', (req,res) => {
    const id = req.params.id
    const data = tasks.find((task) => task.id == parseInt(id))

    if(!data){
        return res.status(404).send("Task not found!")
    }

    data.title = req.body.title;
    data.description = req.body.description;
    data.completed = req.body.completed;

    res.send(data)
})

app.delete('/tasks/:id', (req,res) => {
    const id = req.params.id
    const data = tasks.find((task) => task.id == parseInt(id))
    const index = tasks.indexOf(data)
    tasks.splice(index,1)

    res.status(200).send(data)
    
})



app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;