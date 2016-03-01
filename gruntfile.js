module.exports = function(grunt) {
 	// Project configuration
 	grunt.initConfig({
 		pkg: grunt.file.readJSON('package.json'),

 		// Compile sass to css
 		sass: {
 			main: {
 				options: {
 					style: 'expanded',
			        	sourcemap: 'none'
			        },
			        files: [{
			        	expand: true,
			        	cwd: 'src/styles/sass',
			        	src: ['*.scss'],
			        	dest: 'src/styles/css',
			        	ext: '.css'
			        }]
 			}
 		},

 		// Combined all of css files
 		concat: {
 			styles: {
 				src: ['src/styles/css/*.css'],
 				dest: 'test/css/style.css'
 			}
 		},

 		// Minified css files
 		cssmin: {
 			option: {
 				keepSpecialComments: 0,
 			},
 			minify: {
 				src: 'test/css/style.css',
 				dest: 'test/css/style.min.css'
 			}
 		},

 		// react jsx transform & dependency control
 		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ]
			},
			client: {
				// src: ['src/components/*.jsx'],
				src: ['src/views/**/*'],
				dest: 'test/js/app.js'
			}
		},

 		// Minified all of js file
 		uglify: {
 			options: {
 				magle: false,
 				compress: {
 					drop_console: true
 				},
 				preserveComments: false
 			},
			react: {
				src: 'test/js/app.js',
				dest: 'test/js/app.min.js'
			}
		},

 		// Run server
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'test',
					open: true,
					livereload: true
				}
			}
		},

		// Fix jsx code and run again automatically 
		watch: {
			// watching sass task
			sass: {
				files: 'src/styles/**/*.scss',
		        	tasks: ['sass', 'concat', 'cssmin'],
		        	options: {
			      	livereload: true
			    	}
			},
			// watching react task
			react: {
		        		// files: 'src/components/*.jsx',
		        		files: 'src/views/**/*',
		        		tasks: ['browserify', 'uglify'],
		        		options: {
				      		livereload: true
				    	}
		      	}
		}
 	});

 	// loadNpmTasks
 	grunt.loadNpmTasks('grunt-contrib-sass');
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');
 	grunt.loadNpmTasks('grunt-browserify');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-connect');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	
 	// registerTasks
 	grunt.registerTask('default', 	['sass', 'concat', 'cssmin', 'browserify', 'uglify', 'connect', 'watch']);
 };