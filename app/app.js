const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res)=> {

res.send('Hello World!');

});

app.get('/teapot', (req, res)=>{
res.set('x-custom-header', 'I am teapot');
res.status(418);
res.send('I prefer coffe');
})
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
