var mongoose = require('mongoose');
var Order = mongoose.model('Order');
	module.exports = (function(){
		return{
			index: function(req, res){
				Order.find({}, function(err, results){
					if (err){
						console.log(err);
					}
					else{
						console.log(results);
						res.json(results);
					}
				})
			},
			addorder: function(req, res){
				console.log(req.body.prod);
				var new_order = new Order({name: req.body.name, quan: req.body.quan, prod: req.body.prod});
				console.log(new_order);
				new_order.save(function(err, results){
					if(err){
						console.log(err);
					}
					else{
						res.json(results);
					}
				})
			}
		}
	})();