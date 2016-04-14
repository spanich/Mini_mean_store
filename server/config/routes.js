var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');
// var dash = require('./../controllers/dash.js');
	module.exports = function(app) {
		app.get('/customers', function(req, res){
			customers.index(req, res);
		});
		app.post('/customers', function(req, res){
			customers.addcustomer(req, res);
		});
		app.get('/orders', function(req, res){
			orders.index(req, res);
		})
		app.post('/orders', function(req, res){
			orders.addorder(req, res);
		})
		app.post('/products', function(req, res){
			products.addproduct(req, res);
			//prior addproduct refers to backend controller method that is being called
		})
		app.get('/products', function(req, res){
			products.index(req, res);
		})
	}