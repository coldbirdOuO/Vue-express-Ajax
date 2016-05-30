var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/template/index.html')
})

var UserListBack = [];

app.post('/', function(req, res) {

	UserListBack.push(req.body.user)
	var msg = {
		status: 200,
		message: 'GOOD'
	};
	res.send(msg);

})

app.get('/user', function(req, res) {
	var msg ={
		status: 200,
		userList:  UserListBack
	};
	res.send(msg);
})

app.get('/delete/:user', function(req, res) {
	for(var i =0; i<UserListBack.length;i++) {
		if(req.params.user == UserListBack[i]) {
			UserListBack.splice(i, 1);
			var msg = {
				status: 200,
				msg: UserListBack
			}
			res.send(msg);
		}
	}
})

console.log('Running in http://localhost:3000')
app.listen(3000);