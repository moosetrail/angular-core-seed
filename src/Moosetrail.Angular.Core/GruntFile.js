/**
 * Created by Johanna on 2015-08-28.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        ts: {
            options: {
                declaration: true
            },
            default: {
                src: [
                    "Core/angularModule.ts",
                    "Core/**/*.ts",
                    "!Core/**/*module.ts",
                    "Core/**/*module.ts"
                ],
                out: "../../dist/content/Scripts/moosetrail-ng-core.js"
            },
            dev: {
                src: [
                   "Core/angularModule.ts",
                   "Core/**/*.ts",
                   "!Core/**/*module.ts",
                   "Core/**/*module.ts"
                ],
                out: "moosetrail-ng-core.js"
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-ts");

    // Default task(s).
    grunt.registerTask("default", ["ts:dev"]);
    grunt.registerTask("deploy", ["ts"]);
};