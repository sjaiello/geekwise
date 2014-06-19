module.exports = function(app) {

// Require mongoose dependencies
    var mongoose = require('mongoose');
    var passport = require('passport');

    /* ======================= server routes ====================== */
// handle things like api calls
// authentication routes

// products api route
    app.get('/api/product/:productId', function(req, res) {
// use mongoose to get a product in the database by guid
        mongoose.model('Product').findOne({guid: req.params.productId}, function(err, product) {
// if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.send(product); // return all nerds in JSON format
        });
    });
// products api route

    app.get('/api/products', function(req, res){

        var params ={

        };
        if(req.query.featured !== undefined){
            params.isFeatured = req.query.featured;
        }

        mongoose.model('Product').find(params, function(err, products){
            if(err)
                res.send(err);
            res.send(products);
        });
    });
// logout API route
    app.get('/api/logout', function(req, res, next) {
        req.logout();
        res.send(200);
    });

// login API route
    app.post('/api/login', passport.authenticate('local'), function(req, res) {
        res.cookie('user', JSON.stringify(req.user));
        res.send(req.user);
    });

// signup API route
    app.post('/api/signup', function(req, res, next) {
        var User = mongoose.model('User');
        var user = new User({
            email: req.body.email,
            password: req.body.password
        });
        user.save(function(err) {
            if (err) return next(err);
            res.send(200);
        });
    });

    /* ========================= frontend routes ======================= */
// route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};