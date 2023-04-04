module.exports = function (grunt) {

    //grunt.loadNpmTasks('Nome do pacote a ser configurado vai aqui')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // Ler arquivo de scripts do node.js

        less: { // Config para compilar arquivos LESS (.less)
            development: { // Codigo executado em ambiente de desenvolvimento
                files: {
                    'dev/styles/main.css': './src/styles/main.less'
                }
            },
            production: { // Codigo executado em ambiente de producao
                options: {
                    compress: true  // Comprimir arquivo less para versao minificada
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less' //salvar o arquivo minificado
                }
            }
        },
        sass: { // Config para compilar arquivos SASS (.sass / .scss)
            dist: {
                options: {
                    style: 'compressed' // Comprimir o arquivo sass para versao minificada
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent: { // Usado para realizar tarefas de maneira assincrona
            target: ['olaGruntDemorado', 'less', 'sass']
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: { // Configuracao para ambiente dev
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS', // deve ser colocado a mesma coisa no link:css href com @@ e o match
                        replacement: './styles/main.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS', // deve ser colocado a mesma coisa no script:src href com @@ e o match
                        replacement: './src/scripts/main.css'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev/'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: 'ENDERECO_DO_CSS',
                        replacement: './styles/main.min.css'
                    },
                    {
                        match: 'ENDERECO_DO_JS',
                        replacement: './scripts/main.min.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['prebuild/index.html'],
                    dest: 'dist/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collpaseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    })

    grunt.registerTask('olaGrunt', function () {
        console.log('Olá Grunt!');
    })

    grunt.registerTask('olaGruntDemorado', function () {
        const done = this.async()
        setTimeout(() => { console.log('Olá Grunt! Desculpe a demora'); done(); }, 3000)
    })

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify'])
}