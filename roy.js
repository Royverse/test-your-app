const express = require('express');
const app = express();

app.get('/',(req, res) =>{

    res.send('Hello World')
});
app.listen(300, () => console.log('this is port 3000'))