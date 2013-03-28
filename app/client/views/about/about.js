define(['text!templates/about/about.html'], function(template) {
  'use strict';

  var AboutView = Backbone.View.extend({
  	el: $("#main"),

    initialize: function() {
      console.log('AboutView');
      
      this.$el.html(template);
    }
  });

  return AboutView;

});