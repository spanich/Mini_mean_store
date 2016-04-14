var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	date: String
});

mongoose.model('Customer', CustomerSchema);



// created_at: {type: Date, default: new Date},