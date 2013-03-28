define(['text!templates/about/about.html'], function(template) {
  'use strict';

  var AboutView = Backbone.View.extend({
  	el: $("#main"),

    initialize: function() {
      this.render();
    },

    render: function() {
    	var variables = { user_name: "Guilherme" };
    	var renderedTemplate = _.template(template, variables);

    	this.$el.html(renderedTemplate);
    }

  });

  return AboutView;

});