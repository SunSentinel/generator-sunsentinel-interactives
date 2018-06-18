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
      }
    ];

    return this.prompt(questions).then(answers => {
      this.title = answers.title;
    });
  }

  writing() {
    const timestamp = new Date();
    const liveUrl = `http://projects.sun-sentinel.com/${timestamp.getFullYear()}/${
      this.title
    }`;

    // Write meta files
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));

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
    this.fs.copy(this.templatePath('src'), this.destinationPath('./src'));
    this.fs.copy(this.templatePath('gulpfile.js'), this.destinationPath('./gulpfile.js'));
    this.fs.copy(this.templatePath('extras'), this.destinationPath('./extras'));
  }
};
