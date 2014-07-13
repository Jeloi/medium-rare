module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Uglify */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    /* Sass */
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/main.css': 'src/scss/main.scss'
        }
      } 
    },
    /* Watch */
    watch: {
      // js: {
      //   files: 'src/js/*.js',
      //   tasks: ['uglify'],
      //   options: {
      //     interrupt: true,
      //   },
      // },
      css: {
        files: 'src/scss/**/*.{scss,sass}',
        tasks: ['sass'],
        options: {
          interrupt: true,
        },
      }
    }
  });

  // Load the plugins that provide the above task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Uglify js, minify, prefix, and compile sass for production
  grunt.registerTask('production', ['uglify','cssmin']);

  // Default task(s). These tasks are run automatically if Grunt is executed without any tasks specified.
  grunt.registerTask('default', ['watch']);

};

