var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: String,
	img: String,
	desc: String,
	quan: String
});

mongoose.model('Product', ProductSchema);