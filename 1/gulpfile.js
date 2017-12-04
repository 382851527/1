var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');//压缩js文件


gulp.task('js', function (){
    gulp.src('./app/app.js')
    .pipe(concat('app.min.js'))//合并到
    .pipe(uglify())//压缩
    .pipe(gulp.dest('./new'))//输出到文件夹
})


gulp.task('css', function (){
    gulp.src("./css/*.css")//文件的路径
    .pipe(concat("bundle.css"))//合并到
    .pipe(minifyCss())//压缩
    .pipe(gulp.dest('./new'))//输出到文件夹  没有新建
})



gulp.task('httpS',function(){
   gulp.src('.')
    .pipe(webserver({
        port: 8090,
        host: 'localhost',
        livereload: true,
        fallback: './index.html',
        open: true
   }))
})


gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            port: 8080,
            host: 'localhost',
            middleware: function (req, res) {
                if (req.url.indexOf('favicon.ico') !== -1) {
                    return;
                }
                res.writeHead(200, {
                    'Content-Type' : 'text/json;charset=utf-8',
                    'Access-Control-Allow-Origin' : '*'
                })
                if (req.url === '/') {
                    res.end(require('fs').readFileSync('app/data.json'))
                }
            }
        })
    )
})

gulp.task('default', ['httpS', 'webserver'])