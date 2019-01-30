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
        name    : 'projectName',
        message : 'Project name',
        default : 'example'
      },
      {
        type    : 'input',
        name    : 'packageName',
        message : 'Package Name',
        default : 'com.example'
      },
      {
        type    : 'input',
        name    : 'javaVersion',
        message : 'Java Version',
        default : '1.8'
      },
      {
        type    : 'input',
        name    : 'gradleVersion',
        message : 'Gradle Version',
        default : '5.1'
      },
      {
        type    : 'input',
        name    : 'junitVersion',
        message : 'JUnit Version',
        default : '4.12'
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('build.gradle'),
      this.destinationPath(this.answers.projectName + '/build.gradle'),
      {
        projectName: this.answers.projectName,
        gradleVersion: this.answers.gradleVersion,
        packageName: this.answers.packageName
      }
    );

    this.log(this.destinationRoot());

    this.fs.copyTpl(
      this.templatePath('Makefile'),
      this.destinationPath(this.answers.projectName + '/Makefile'),
      {
        projectName: this.answers.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Main.java'),
      this.destinationPath(this.answers.projectName + '/src/main/java/Main.java'),
      { packageName: this.answers.packageName }
    );
  }
};
