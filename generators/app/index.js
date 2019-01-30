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
};
