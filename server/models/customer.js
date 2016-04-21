var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Customer', CustomerSchema);



// created_at: {type: Date, default: new Date},