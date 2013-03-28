define(['text!templates/home/home.html'], function(template) {
  'use strict';

  var HomeView = Backbone.View.extend({
  	el: $("#main"),

    initialize: function() {
      console.log('HomeView');
      
      this.$el.html(template);
    }
  });

  return HomeView;

});