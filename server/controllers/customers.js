var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		index: function (req, res) {
			Customer.find({}, function(err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		addcustomer: function(req, res){
			var new_customer = new Customer({name: req.body.name, date: req.body.date});
			console.log(new_customer);
			new_customer.save(function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		
		
}
})();