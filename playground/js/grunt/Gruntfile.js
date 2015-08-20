module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
    concat: {
      dev: {
        src: ['js/src/*.js'],
        dest: 'js/application.js'
      }
    }
  });
  grunt.registerTask('dev', ['concat:dev']);
}
