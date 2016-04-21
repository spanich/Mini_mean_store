var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	quan: String,
	prod: String,
	created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);