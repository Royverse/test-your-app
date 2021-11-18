const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/',(req, res) =>{

    res.send('Hello World')
});
app.get('/api/courses',(req, res) =>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)

    res.send(courses);
});

app.get('/api/courses/:id',(req, res) =>{
    const course = course.find(c = c.id === parseInt(req.params.id))
if (!course) res.status(404).send('the course');
res.send(course);
    res.send(req.params.id)
});
app.listen(3000, () => console.log('this is port 3000'))