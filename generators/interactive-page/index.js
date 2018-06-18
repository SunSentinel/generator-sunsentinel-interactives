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
        name: 'interactiveType',
        message: 'Which type of page will this be?',
        choices: [
          {
            name: 'Long-form presentation',
            value: 'longForm'
          },
          {
            name: 'Map application',
            value: 'mapPage'
          }
        ]
      }
    ];

    return this.prompt(questions).then(answers => {
      this.title = answers.title;
      this.interactiveType = answers.interactiveType;
    });
  }

  writing() {
    const timestamp = new Date();
    const liveUrl = `http://projects.sun-sentinel.com/${timestamp.getFullYear()}/${
      this.title
    }`;

    // Write meta files
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('./README.md'), {
      projectName: this.title,
      year: timestamp.getFullYear(),
      userName: this.user.git.name(),
      userEmail: this.user.git.email(),
      projectUrl: liveUrl
    });

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('./package.json'),
      {
        projectName: this.title,
        userName: this.user.git.name()
      }
    );

    // Write project files
    this.fs.copy(this.templatePath('bin'), this.destinationPath('./bin'));
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('./gulpfile.js'));
    this.fs.copy(this.templatePath('extras'), this.destinationPath('./extras'));
    this.fs.copy(this.templatePath('src/static'), this.destinationPath('./src/static'));
    this.fs.copy(
      this.templatePath('src/javascripts'),
      this.destinationPath('./src/javascripts')
    );
    this.fs.copy(
      this.templatePath('src/html/data'),
      this.destinationPath('./src/html/data')
    );
    this.fs.copy(
      this.templatePath('src/html/layouts'),
      this.destinationPath('./src/html/layouts')
    );
    this.fs.copy(
      this.templatePath('src/html/partials'),
      this.destinationPath('./src/html/patrials')
    );

    // Interactive-specific imports
    if (this.interactiveType === 'longForm') {
      this.fs.copy(
        this.templatePath('src/html/index.html'),
        this.destinationPath('./src/html/index.html')
      );
    } else if (this.interactiveType === 'mapPage') {
      this.fs.copy(
        this.templatePath('src/html/map.html'),
        this.destinationPath('./src/html/index.html')
      );
    }
  }
};
