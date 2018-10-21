const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const GulpSSH = require('gulp-ssh')
const fs = require('fs');

root = '../_book';
local_publish_directory = '../../../Sites/docs/';

var config = {
	host: '',
	port: ,
	username: '',
	passphrase: '',
	privateKey: fs.readFileSync('')
}

var gulpSSH = new GulpSSH({
	ignoreErrors: false,
	sshConfig: config
  })

gulp.task('publish_production', function () {
return gulp
	.src(root + '/**')
	.pipe(gulpSSH.dest(''))
})

gulp.task('watch', function(done) {
	browserSync.init({
		browser: "google chrome",
		proxy: 'http://localhost:8888/docs/',
		port:8886
	});


	gulp.watch(root + '/*.html', gulp.parallel('publish_site'));
	gulp.watch(root + '**/*.html').on('change', browserSync.reload);
	
});


gulp.task('publish_site', function(done) {
	console.log('HTML changes detected, publishing website...');

	console.log('Copying master CSS to published CSS folder...');
	gulp.src('../css/**/*')
	.pipe(gulp.dest(root + '/css/'));

	console.log('Copying theme images into img folder...');
	gulp.src('../img/*.png')
	.pipe(gulp.dest(root + '/img/'));
	
	console.log('Copying built website to testing environment...');
	gulp.src(root + '/**')
	.pipe(gulp.dest(local_publish_directory));

	done();
});