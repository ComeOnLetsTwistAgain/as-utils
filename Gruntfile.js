'use strict';

module.exports = function (grunt) {

	grunt.initConfig({

		watch: {
			sassWatch: {
				files: "./src/style/*.scss",
				tasks: ["sass"]
			},
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dist/style/style.css': 'src/style/master.scss'
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// register tasks
	grunt.registerTask('default', ['watch']);

};