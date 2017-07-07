
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				spawn: true,
			},
			scss: {
				files: ['**/*.scss'],
				tasks: ['sass'],
			},
			// all: {
			// 	files: ['**/*.php', '**/*.html', '**/*.css'],
			// }
		},
		sass: {
			dist: {
				files: {
					'css/style.css': 'resources/sass/style.scss'
				}
			}
		}
	});

	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'watch']);

};