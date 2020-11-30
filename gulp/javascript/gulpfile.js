const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat') //Os arquivos serão concatenados na ordem em que são especificados na gulp.srcfunção.
const uglify = require('gulp-uglify') // Minimiza o JavaScript com Uglify
const babel = require('gulp-babel') // Babel é um conjunto de ferramentas usado para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript em navegadores ou ambientes atuais e mais antigos.

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(transformacaoJS)