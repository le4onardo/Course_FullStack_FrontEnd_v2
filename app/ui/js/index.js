const socket = new WebSocket('ws://127.0.0.1:8080/web_socket');

socket.addEventListener('message', (event) => {
	console.log('Message from Server', event.data);
	const output = document.getElementsByClassName('output')[0];
	output.innerHTML = event.data;
});


const input = document.getElementsByClassName('input-box')[0];

input.onkeyup = function(e){
	if (e && e.keyCode == 13){
		console.log('sending',  input.value);
		socket.send(JSON.stringify({type: 'query', payload: input.value}) );
	}
}
