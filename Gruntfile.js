'use strict';

var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		express: {
			custom: {
				options: {
					port: 9001,
					bases: 'www-root',
					supervisor: true,
					server: path.resolve('./app/server/main')
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default', ['express', 'express-keepalive']);

};
