'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');
const figlet = require('figlet');

module.exports = class extends Generator {
  prompting() {
    const done = this.async();

    this.log(chalk.red(figlet.textSync('Sun Sentinel', { horizontalLayout: 'full' })));
    this.log(
      chalk.white(
        ` Welcome to the South Florida Sun Sentinel interactives generator.\n\n`
      )
    );

    const generatorDir = path.join(this.sourceRoot(), '../..');
    const generatorSubdirs = _.filter(fs.readdirSync(generatorDir), pathName =>
      fs.statSync(path.join(generatorDir, pathName)).isDirectory()
    );

    let subGeneratorConfigs = [];
    _.each(generatorSubdirs, dirName => {
      const rawConfigPath = path.join(generatorDir, dirName, 'config.json');
      if (fs.existsSync(rawConfigPath)) {
        const rawConfig = require(rawConfigPath);
        const finalConfig = _.clone(rawConfig);

        finalConfig.typeSlug = dirName;
        subGeneratorConfigs.push(finalConfig);
      }
    });

    this.subGeneratorConfigs = subGeneratorConfigs;

    const prompts = [
      {
        type: 'list',
        name: 'module',
        message: 'What do you want to build today?',
        choices: [
          {
            name: 'Interactive page',
            value: 'interactive-page'
          },
          {
            name: 'Interactive embed',
            value: 'interactive-embed'
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      done();
    });
  }

  // Hand off to the chosen subgenerator
  subgen() {
    if (_.includes(_.map(this.subGeneratorConfigs, 'typeSlug'), this.props.module)) {
      this.composeWith(`sunsentinel-interactives:${this.props.module}`, {
        options: {
          baseConfig: _.find(this.subGeneratorConfigs, { typeSlug: this.props.module })
        }
      });
    }
  }
};
