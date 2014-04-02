module.exports = function(grunt) {
    'use strict';

    var localConfig = grunt.file.readJSON('package.json').localConfig;

    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'css/style.css.map',
                    // This is mandatory for Chrome to parse the less files
                    sourceMapRootpath: localConfig.host + localConfig.pathToTheme + 'drupalStarterTheme/'
                },
                files: {
                    'css/style.css': 'less/style.less',
                    'css/bootstrap.css': 'less/bootstrap.less'
                }
            }
        },
        styleguide: {
            options: {
                template: {
                    src: 'styleguide/kss'
                },
                framework: {
                    name: 'kss'
                }
            },
            all: {
                options: {
                    // task options
                },
                files: {
                    'styleguide': 'less/bootstrap.less'
                }
            }
        },
        watch: {
            all: {
                files: [
                        'less/**/*.less'
                       ],
                tasks: ['less', 'styleguide'],
            }
        }
    });

    grunt.registerTask('default', ['less', 'styleguide', 'watch']);
};
