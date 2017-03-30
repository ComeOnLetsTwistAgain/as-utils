'use strict';

module.exports = function (grunt) {

	grunt.initConfig({

		watch: {
			sassWatch: {
				files: "./src/style-utils/*.scss",
				tasks: ["sass"]
			},
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/style-utils/style-utils.css': 'src/style-utils/master.scss'
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// register tasks
	grunt.registerTask('default', ['watch']);

};