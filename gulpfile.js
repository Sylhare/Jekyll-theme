/*
 * Here are all of the gulp tasks you can use to help manage your blog
 * Use `npm install` to install all the dependencies located in package.json
 * If you have an issue with sharp, try: `npm rebuild`.
 * Then `gulp default` to minimize css and images.
 */
const { src, dest, series, parallel } = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const webp = require('gulp-webp');
const responsive = require('gulp-responsive');
const fs = require('fs');
const changed = require('gulp-changed');

//TODO: Update docs

// Create an empty post with today's date
// usage: gulp post -n <title of the post>
const post = function(callback) {
  let args = process.argv;
  let title = args[args.length - 1];
  let filename = new Date().toLocaleDateString('en-CA') + '-' + title.replaceAll(' ', '-') + '.md';
  let content = '---\n' +
    'layout: post\n' +
    'title: ' + title + '\n' +
    //'feature-img: "assets/img/"\n' +
    //'thumbnail: "assets/img/thumbnails/"\n' +
    'tags: []\n' +
    '---';
  console.log('[' + new Date().toLocaleTimeString('en-CA', {hour12: false}) + '] File created: _posts/' + filename);
  fs.writeFile(__dirname + '/_posts/' + filename, content, callback);
}

// Minify JS
const js = function(cb) {
  pump([
     src('assets/_js/*.js'),
     concat('main.min.js'),
     uglify({output: {comments: 'some'}}), //will preserve multi-line comments w/ @preserve, @license or @cc_on
     dest('assets/js')
  ],
  cb
  );
}

// TODO: Updated Bootstrap to 4.6
// Isolate Bootstrap
const bsIsolate = function(cb) {
  pump([
     src('assets/_css/bootstrap-iso.less'),
     less({strictMath: 'on'}),
     replace('.bootstrap-iso html', ''),
     replace('.bootstrap-iso body', ''),
     dest('assets/_css/')
  ],
  cb
  );
}

// Minify Bootstrap CSS
const bsMinify = function(cb) {
  pump([
     src('assets/_css/bootstrap-iso.css'),
     cleanCSS(),
     concat('bootstrap-iso.min.css'),
     dest('assets/css/')
  ],
  cb
  );
}

// Resize and Minify IMG
const paths = {
    logo: {
        src: 'assets/_img/logo.{gif,jpg,jpeg,png,svg}',
        dest: 'assets/img/'
    },
    featured: {
        src: 'assets/_img/featured/*.{gif,jpg,jpeg,png,svg}',
        dest: 'assets/img/featured/'
    },
    thumbnails: {
        src: 'assets/img/featured/*.{gif,jpg,jpeg,png,svg,webp}',
        dest: 'assets/img/thumbnails/'
    },
    webp: {
        src: 'assets/img/featured/*.{jpg,jpeg,png}',
        dest: 'assets/img/featured/webp/'
    },
}

const imgLogo = function(cb) {
  pump([
     src(paths.logo.src),
     changed(paths.logo.dest),
     responsive({'*': {width: 512}}),
     imagemin({verbose: true}),
     dest(paths.logo.dest)
  ],
  cb
  );
}

const imgFeatured = function(cb) {
  pump([
     src(paths.featured.src),
     changed(paths.featured.dest),
     responsive({'*': {width: 1920}}),
     imagemin({verbose: true}),
     dest(paths.featured.dest)
  ],
  cb
  );
}

const imgThumbnails = function(cb) {
  pump([
     src(paths.thumbnails.src),
     changed(paths.thumbnails.dest),
     responsive({'*': {width: '30%'}}),
     dest(paths.thumbnails.dest)
  ],
  cb
  );
}

const imgWebp = function(cb) {
  pump([
     src(paths.webp.src),
     changed(paths.webp.dest),
     webp({quality: 85, preset: 'photo', method: 6}),
     dest(paths.webp.dest)
  ],
  cb
  );
}

// Tasks
exports.post = post;
exports.js = js;
exports.bootstrap = series(bsIsolate, bsMinify);
// FIXME: img series will fail due to gulp-responsive bug dealing with 0 imgs
exports.img = parallel(imgLogo, series(imgFeatured, imgThumbnails));
exports.all = parallel(js, series(bsIsolate, bsMinify));

