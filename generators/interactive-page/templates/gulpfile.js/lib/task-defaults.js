const os   = require('os')
const path = require('path')
const pkg  = require(path.resolve(process.env.PWD, 'package.json'))

module.exports = {
  javascripts: {
    extensions: ['js', 'jsx'],
    hot: {
      reload: true,
      noInfo: false,
      quiet: true,
      react: false
    },
    devtool: 'eval-cheap-module-source-map',
    babelLoader: {
      // "test" is derived from TASK_CONFIG.javascripts.extensions
      // "options" is derived from TASK_CONFIG.javascripts.babel
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    babel: {
      presets: [["es2015", { "modules": false }], 'stage-1']
    },
    development: {},
    production: {
      devtool: false,
      uglifyJsPlugin: {},
      definePlugin: {
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }
    }
  },

  stylesheets: {
    sass: {
      includePaths: [
        "./node_modules",
        "./node_modules/normalize.css",
        "./node_modules/bourbon/app/assets/stylesheets",
        "./node_modules/bourbon-neat/app/assets/stylesheets"
      ]
    },
    extensions: ["sass", "scss", "css"]
  },

  html: {
    dataFile: "data/global.json",
    nunjucksRender: {
      envOptions: {
        watch: false
      }
    },
    htmlmin: {
      collapseWhitespace: false
    },
    excludeFolders: ["layouts", "partials", "data"],
    extensions: ["html", "njk", "json"]
  },

  images: {
    extensions: ["jpg", "png", "svg", "gif"]
  },

  fonts: {
    extensions: ["woff2", "woff", "eot", "ttf", "svg"]
  },

  svgSprite: {
    svgstore: {}
  },

  production: {
    rev: true
  },

  additionalTasks: {
    initialize(gulp, PATH_CONFIG, TASK_CONFIG) {
      // gulp.task('myTask', function() { })
    },
    development: {
      prebuild: null,
      postbuild: null
    },
    production: {
      prebuild: null,
      postbuild: null
    }
  }
}
