App.FoodController = Ember.ObjectController.extend({
    actions: {
        addToCart: function() {
            var self = this;
            self.store.find('Cart').then(function(cartItems) {
                cartItems = cartItems || [];
                var food = self.get('model');
                var cartItem = {};

                cartItem.id = cartItems.get('length');
                cartItem.food = {
                    id: food.get('id'),
                    name: food.get('name'),
                    image: food.get('image'),
                    description: food.get('description')
                };

                self.store.createRecord('Cart', cartItem);
                self.transitionToRoute('cart');

            });
        }
    }
});

App.CartController = Ember.ObjectController.extend({
    actions: {
        checkout: function() {
            // we get the list of all the foods in 
            // the current cart and add it as a record 
            // to OrderHistory
            var self = this;

            self.store.find('Cart').then(function(cartItems) {
                var order = [];
                cartItems.forEach(function(cartItem) {
                    var food = cartItem.get('food');
                    order.push({
                        id: cartItem.get('id'),
                        food: {
                            id: food.id,
                            name: food.name,
                            image: food.image,
                            description: food.description
                        }
                    });
                });

                self.store.find('History').then(function(historyItems) {
                    historyItems = historyItems || [];
                    var historyItem = {};
                    historyItem.id = historyItems.get('length');
                    historyItem.order = order;

                    // Add items to order history
                    self.store.createRecord('History', historyItem);
                    self.transitionToRoute('history');

                    // Remove all Items from current cart
                    self.store.unloadAll('Cart');

                });
            });

        }
    }
});
