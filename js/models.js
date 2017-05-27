App.Food = DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    description: DS.attr('string')
});

App.Cart = DS.Model.extend({
    food: DS.attr()
});

App.History = DS.Model.extend({
    order: DS.attr()
});

App.Food.reopenClass({
    FIXTURES: foods
});

App.Cart.FIXTURES = [];

App.History.FIXTURES = [];
