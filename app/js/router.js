App.Router.map(function() {
    // domain/food
    this.route('food');
});





App.Router.map(function() {
    // put your routes here
    this.route('foods');

    this.route('food', {
        path: '/food/:food_id'
    });

    this.route('cart');

    this.route('history', function() {
        this.route('details', {
            path: '/details/:details_id'
        });
    });
});
