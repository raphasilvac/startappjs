require.config({
    urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {
        text: '../components/requirejs-text/text',
        templates: '../templates',

        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        bootstrap: '../components/bootstrap/docs/assets/js/bootstrap'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        underscore: {
            exports: '_'
        },

        bootstrap: {
            deps: ['jquery']
        }
    }
});


require(['backbone', 'bootstrap'], function(Backbone) {
    'use strict';
    
    location.hash = '#/home';

    var AppRouter = Backbone.Router.extend({
        routes: {
            ':uri_segment_one': 'redirect'
        }
    });

    var app_router = new AppRouter;

    app_router.on('route:redirect', function(uri_segment) {
      require(['views/' + uri_segment + '/' + uri_segment], function(AppView) {
        var app_view = new AppView;
      });
    });

    Backbone.history.start();
});


require.onError = function (err) {
    if (err.requireType === 'scripterror') {
        location.hash = '#/home';
    }

    throw err;
};