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
