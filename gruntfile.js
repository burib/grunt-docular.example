module.exports = function(grunt) {
	var generatedDocsPath = 'generated_docs';
	
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        docular: {
            docular_webapp_target : generatedDocsPath,
            groups: [
                {
                    groupTitle: 'title', //Title used in the UI
                    groupId: 'id', //identifier and determines directory
                    groupIcon: 'beer', //Icon to use for this group
                    groups: [
                        {
                            id: "module1",
                            title:"Module1",
                            scripts: grunt.file.expand(['src/**/*.js'])
                        }
                    ]
                }
            ],
            showDocularDocs: false,
            showAngularDocs: false
        },
        docularserver: {
            targetDir: generatedDocsPath
        }
    });

    // Load the plugin that provides the "docular" tasks.
    grunt.loadNpmTasks('grunt-docular');

    // Default task(s).
    grunt.registerTask('default', ['docular']);

};