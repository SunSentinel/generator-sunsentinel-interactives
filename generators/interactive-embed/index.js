const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  Initializing() {
    // Pull in Sun Sentinel styles
    this.composeWith(require.resolve('../styles'));
  }

  prompting() {
    const questions = [
      {
        type: 'input',
        name: 'title',
        message:
          'What would you like to call this project? (Separate words with hyphens, not spaces.): '
      },
      {
        type: 'list',
        name: 'embedType',
        message: 'Which type of embed are you creating?',
        choices: [
          {
            name: 'Long-form',
            value: 'htmlEmbed'
          },
          {
            name: 'Map',
            value: 'mapEmbed'
          },
          {
            name: 'Sortable table',
            value: 'tableEmbed'
          },
          {
            name: 'Other graphic',
            value: 'otherEmbed'
          }
        ]
      }
    ];

    return this.prompt(questions).then(answers => {
      this.title = answers.title;
      this.embedType = answers.embedType;
    });
  }

  writing() {
    if (this.embedType === 'htmlEmbed') {
      this.fs.copy(
        this.templatePath('longform.html'),
        this.destinationPath('./src/index.html')
      );
    } else if (this.embedType === 'mapEmbed') {
      this.fs.copy(
        this.templatePath('map.html'),
        this.destinationPath('./src/index.html')
      );
    } else if (this.embedType === 'tableEmbed') {
      this.fs.copy(
        this.templatePath('table.html'),
        this.destinationPath('./src/index.html')
      );
    } else if (this.embedType === 'otherEmbed') {
      this.fs.copy(
        this.templatePath('graphic.html'),
        this.destinationPath('./src/index.html')
      );
    }
  }
};
