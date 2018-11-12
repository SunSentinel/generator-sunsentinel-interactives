# generator-sunsentinel-interactives [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A Yeoman generator to create interactive news projects for the South Florida Sun Sentinel. 

The generator takes care of scaffolding projects, meaning it creates the boilerplate files and folders needed for the given project using our templates and styles. It is a starting point for creating both stand-alone presentations and  interactives that are embeddable in our CMS.

## Getting started

First, install [Yeoman](http://yeoman.io) and generator-sunsentinel-interactives using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/docs/install)).

```bash
npm install -g yo generator-sunsentinel-interactives
```

Then create a new folder for you project's root and switch into it.

```bash
mkdir my-project
cd my-project
```

Finally, run the generator and follow the prompts with:


```bash
yo sunsentinel-interactives
```

The generator will allow you to pick the type of interactive project you want to create and then generates the boilerplate files in your working directory.

**Available templates**
+ Full-page presentation
+ Full-page map
+ Embeddable graphic

## Developing the generator
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
