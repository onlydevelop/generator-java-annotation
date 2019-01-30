'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the swell ${chalk.red('generator-java-annotation')} generator!`)
    );

    this.answers = await this.prompt([
      {
        type    : 'input',
        name    : 'packageName',
        message : 'Package Name',
        default : 'com.example'
      },
      {
        type    : 'input',
        name    : 'projectName',
        message : 'Project name',
        default : 'example'
      },
      {
        type    : 'input',
        name    : 'className',
        message : 'Class name',
        default : 'RunTest'
      },
      {
        type    : 'input',
        name    : 'gradleVersion',
        message : 'Gradle Version',
        default : '5.1'
      }
    ]);
  }

  writing() {
    this.packageDir = this.answers.packageName.replace('.', '/') + '/';
    this.fs.copyTpl(
      this.templatePath('class.java'),
      this.destinationPath(this.answers.projectName + '/src/main/java/' + this.packageDir + this.answers.className + '.java'),
      {
        packageName: this.answers.packageName,
        className: this.answers.className
      }
    );

    this.fs.copyTpl(
      this.templatePath('build.gradle'),
      this.destinationPath(this.answers.projectName + '/build.gradle'),
      {
        className: this.answers.className,
        gradleVersion: this.answers.gradleVersion,
        packageName: this.answers.packageName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Makefile'),
      this.destinationPath(this.answers.projectName + '/Makefile'),
      {
        projectName: this.answers.projectName
      }
    );
  }
}
