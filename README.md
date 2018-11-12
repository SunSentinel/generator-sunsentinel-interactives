# generator-sunsentinel-interactives [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A Yeoman generator to create interactive news projects for the South Florida Sun Sentinel. 

The generator takes care of scaffolding projects, meaning it creates the boilerplate files and folders needed for the given project using our templates and styles. It is a starting point for creating both stand-alone presentations and  interactives that are embeddable in our CMS.

## What's in here
+ [Why?](#why?)
+ [Getting started](#getting-started)
+ [Available templates](#available-templates)
+ [Developing](#developing)

## Why?
This generator is meant to allow interactive and data reporters to spend more time on storytelling and less time writing boilerplate code for interactive presentations and graphics. This is also a system to ensure the design language of projects at the Sun Sentinel remains consistent.

## Getting started
#### Assumptions
+ You have Node V8.9+ installed
+ You have Yarn installed (though npm is fine too)

First, install [Yeoman](http://yeoman.io) and generator-sunsentinel-interactives using [npm](https://www.npmjs.com/).

```bash
npm install -g yo generator-sunsentinel-interactives
```

Then create a new folder for you project's root and switch into it.

```bash
mkdir my-project
cd my-project
```

Finally, run the generator and follow the prompts:

```bash
yo sunsentinel-interactives
```

The generator will allow you to pick the type of interactive project you want to create and then generates the boilerplate files in your working directory.

## Available templates
+ Full-page presentation
    + http://projects.sun-sentinel.com/2018/fl-voters/
    + http://projects.sun-sentinel.com/cruz-troubled-life/
    + http://projects.sun-sentinel.com/race-guns-activism/
+ Full-page map
    + http://projects.sun-sentinel.com/south-florida-where-to-vote/
    + http://projects.sun-sentinel.com/school-map-2018/


## Developing
To work on the generator and change/add/remove templates, clone the repo and symlink to the package.

 ```bash
git clone git@github.com:SunSentinel/generator-sunsentinel-interactives.git
cd generator-sunsentinel-interactives
npm link
```


TO DO:
+ Add interactive embed generator
+ Add map embed generator
+ Publish to npm

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-sunsentinel-interactives.svg
[npm-url]: https://npmjs.org/package/generator-sunsentinel-interactives
[travis-image]: https://travis-ci.org/SunSentinel/generator-sunsentinel-interactives.svg?branch=master
[travis-url]: https://travis-ci.org/SunSentinel/generator-sunsentinel-interactives
[daviddm-image]: https://david-dm.org/SunSentinel/generator-sunsentinel-interactives.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SunSentinel/generator-sunsentinel-interactives
