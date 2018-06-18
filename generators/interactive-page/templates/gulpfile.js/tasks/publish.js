var path = require('path')
var rename = require('gulp-rename')
var gulp         = require('gulp')
var awspublish = require('gulp-awspublish')


var deployTask = function() {

  gulp.task('deploys3', function() {
    console.log("Publishing...")
    // Save the project name to name the deployed folder.
    var projectName = process.cwd().split(path.sep).pop()

    // create a new publisher using S3 options
    var publisher = awspublish.create({
      region: 'us-east-1',
      params: {
        Bucket: 'projects.sun-sentinel.com'
      },
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    // define custom headers
    var headers = {
      'Cache-Control': 'max-age=315360000, no-transform, public',
    };

    return gulp.src('./public/**')
      .pipe(
        rename(function(path) {
          path.dirname = projectName + "/" + path.dirname;
        })
      )
      // publisher will add Content-Length, Content-Type and headers specified above
      // If not specified it will set x-amz-acl to public-read by default
      .pipe(publisher.publish(headers))

      // create a cache file to speed up consecutive uploads
      .pipe(publisher.cache())

       // print upload updates to console
      .pipe(awspublish.reporter());
  });
}

gulp.task('deploys3', deployTask)
module.exports = deployTask
