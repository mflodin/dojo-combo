module.exports = function(grunt) {

  grunt.initConfig({
    config: {
        // Configurable paths
        app: '.'
    },
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= config.app %>/**/*.html',
                '<%= config.app %>/**/*.css',
                '<%= config.app %>/**/*.js'
            ]
        }
    },
    // The actual grunt server settings
    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: '*'
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '<%= config.app %>'
                ]
            }
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:livereload','watch']);
};

