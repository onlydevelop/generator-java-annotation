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
        name    : 'className',
        message : 'Class name',
        default : 'Calculator'
      },
      {
        type    : 'input',
        name    : 'packageName',
        message : 'Package Name',
        default : 'com.example'
      },
      {
        type    : 'confirm',
        name    : 'addTest',
        message : 'Would you like to add test file?',
        default : true
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

    if(this.answers.addTest) {
      this.fs.copyTpl(
        this.templatePath('classSpec.groovy'),
        this.destinationPath(this.answers.projectName + '/src/test/groovy/' + this.packageDir + this.answers.className + 'Spec.groovy'),
        {
          packageName: this.answers.packageName,
          className: this.answers.className
        }
      );
    }
  }
}
