const app = require('./app');
const mongoose = require('mongoose');
require('colors');
const {DB_HOST, PORT = 3000} = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
	.then(() => {
		app.listen(PORT);
		console.log(`Database is connected. Name: ${DB_HOST}. Port ${PORT}`.green.italic.bold);
	})
	.catch((error) => {
		console.log(error.message.red.bold);
		process.exit(1);
	});
