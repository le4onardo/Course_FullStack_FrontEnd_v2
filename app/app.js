const { WebSocketServer } = require('ws');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const server  = require('http').createServer(app);


app.use('/js', express.static(path.join(__dirname, 'ui/js/')));

app.get('/', (req, res)=> {
   res.sendFile(path.join(__dirname + '/ui/html/index.html'));
});

app.get('/teapot', (req, res)=>{
	res.set('x-custom-header', 'I am teapot');
	res.status(418);
	res.send('I prefer coffe');
})



const wss = new WebSocketServer({
 server: server,
 path: '/web_socket',
});

wss.on('connection', function connection(ws) {
 ws.on('message', function message(data) {
   console.log('message received', data); 
   ws.send('awesome');
 });
});

server.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
