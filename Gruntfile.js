module.exports = function(grunt) {
    'use strict';

    var localConfig = grunt.file.readJSON('package.json').localConfig;

    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: localConfig.pathToTheme + 'drupalStarterTheme/css/style.css.map',
                    // This is mandatory for Chrome to parse the less files
                    sourceMapRootpath: localConfig.host
                },
                files: {
                    'css/style.css': 'less/style.less',
                    'css/bootstrap.css': 'less/bootstrap.less'
                }
            }
        },
        watch: {
            all: {
                files: [
                        'less/**/*.less'
                       ],
                tasks: ['less'],
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};
