/**
 * Using ExpressJS Framework
 */
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
	res.send('Welcome');
});

app.get('/courses', (req, res) => {
	res.send('welcome to courses');
});

app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});