# interactive_<%= projectName %>


An interactive project built with the South Florida Sun Sentinel's [Yeoman generator](). This is a full-page project designed to be published on an S3 bucket on projects.sun-sentinel.com.

Developed by <%= userName %>. View the live project at <%= projectUrl %>.

## Getting started

### Requirements
+ Node 8 or later. If you need to install and manage Node versions then use [nvm](https://github.com/creationix/nvm).
+ [Yarn](https://yarnpkg.com/en/docs/install)
+ [Gulp](https://gulpjs.com/)
+ Sun Sentinel's AWS credentials stored as environment variables


### Usage

1. Switch into the project's root folder and install dependencies with `yarn install`

2. Then run `yarn start` to kickstart the development server on [http://localhost:3000](http://localhost:3000).

3. Once you're finished, build out the project for production with run
`yarn build`

### Deploying

We automate our deployment process with the [gulp-awspublish](https://github.com/pgherveou/gulp-awspublish) library, which takes the 'public' folder and uploads it to the projects.sun-sentinel.com S3 bucket.

First, make sure you have the Sun Sentinel's AWS credentials in your environment variables.

Then, once the project is built, run `yarn deploy`


## Using this template

To create an interactive project similar to this one, refer to the **interactive-page** section of our project generator: https://github.com/SunSentinel/generator-sunsentinel-interactives.git


©<%= year %> South Florida Sun Sentinel