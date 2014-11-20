module.exports = function(grunt) {
	var generatedDocsPath = 'generatedDocsPath';
	
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        docular: {
            docular_webapp_target : generatedDocsPath,
            groups: [
                {
                    groupTitle: 'widgets', //Title used in the UI
                    groupId: 'bb', //identifier and determines directory
                    groupIcon: 'icon-book', //Icon to use for this group
                    sections: [
                        {
                            id: "module1",
                            title:"Module1",
                            scripts: ['src/js/module1/*.js']
                        },
                        {
                            id: "module2",
                            title:"Module2",
                            scripts: ['src/js/module2/*.js']
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