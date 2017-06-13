/*global Backbone*/
var HomeView = Backbone.View.extend({
   render: function () {
       this.$el.html('Home')
   }
});
var CarsView = Backbone.View.extend({
    render: function () {
        this.$el.html('Cars')
    }
});
var BoatsView = Backbone.View.extend({
    render: function () {
        this.$el.html('Boats')
    }
});

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'showHome',
        'cars': 'showCars',
        'boats': 'showBoats'
    },
    showHome: function () {
        var view = new HomeView({el: '#container'});
        view.render();
    },
    showCars: function () {
        var view = new CarsView({el: '#container'});
        view.render();
    },
    showBoats: function () {
        var view = new BoatsView({el: '#container'});
        view.render();
    }
});

var router = new AppRouter;
Backbone.history.start();

var NavView = Backbone.View.extend({
    events: {
        'click': 'onClick'
    },

    onClick: function (e) {
        var el = $(e.target);
        router.navigate(el.attr('data-url'), {trigger: true});

    }
});

var navView = new NavView({el: '#nav'});
