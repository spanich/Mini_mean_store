var mongoose = require('mongoose');
var Product = mongoose.model('Product');
	module.exports = (function(){
		return{
			index: function(req, res){
				Product.find({}, function(err, results){
					if (err){
						console.log(err);
					}
					else{
						res.json(results);
					}
				})
			},
			addproduct: function(req, res){
				console.log(req.body);
				var new_product = new Product({name: req.body.name, img: req.body.img, desc: req.body.desc, quan: req.body.quan});
				console.log(new_product);
				new_product.save(function(err, results){
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