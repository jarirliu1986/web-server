var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/about', function (req, res) {
	res.send('About us')
})
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function () {
	console.log('express server is starting at ' + PORT);
});
