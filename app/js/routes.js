App.IndexRoute = Ember.Route.extend({
    start: 4,
    end: 8,
    model: function() {
        return this.store.find('Food', {
            start: this.get('start'),
            end: this.get('end')
        });
    }
});

App.FoodsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('Food');
    }
});

App.FoodRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('Food', params.food_id);
    }
});

App.CartRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('Cart');
    }
});

App.HistoryRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('History');
    }
});

App.HistoryDetailsRoute = Ember.Route.extend({
    model: function(params) {
        // This will not work while we are using
        // Fixture Adapter
        // The History array will become [] when we reload
       
        if (params.order_id) {
            return this.store.find('History', params.order_id);
        } else {
            return {};
        }
    }
});
