'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts)
    this.option('example')
  }

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
        default : 'TestAnnotation'
      },
      {
        type    : 'list',
        name    : 'retentionPolicy',
        message : 'Retention Policy?',
        choices : ['CLASS', 'RUNTIME', 'SOURCE'],
        default : 'RUNTIME'
      },
      {
        type    : 'list',
        name    : 'elementType',
        message : 'Element Type?',
        choices : ['ANNOTATION_TYPE', 'CONSTRUCTOR', 'FIELD', 'LOCAL_VARIABLE',
                  'METHOD', 'PACKAGE', 'PARAMETER', 'TYPE'],
        default : 'METHOD'
      }
    ]);
  }

  writing() {
    this.packageDir = this.answers.packageName.replace('.', '/') + '/';
    
    if(this.options.example) {
      // Test annotation class
      this.answers.className = "Test"
      this.templateClass = "example-test.java"
      this.fs.copyTpl(
        this.templatePath(this.templateClass),
        this.destinationPath(this.answers.projectName + '/src/main/java/' + this.packageDir + this.answers.className + '.java'),
        {
          packageName: this.answers.packageName,
          retentionPolicy: this.answers.retentionPolicy,
          elementType: this.answers.elementType,
          className: this.answers.className,
        }
      );

      // TestInfo annotation class
      this.answers.className = "TesterInfo"
      this.templateClass = "example-testinfo.java"
      this.fs.copyTpl(
        this.templatePath(this.templateClass),
        this.destinationPath(this.answers.projectName + '/src/main/java/' + this.packageDir + this.answers.className + '.java'),
        {
          packageName: this.answers.packageName,
          retentionPolicy: this.answers.retentionPolicy,
          elementType: this.answers.elementType,
          className: this.answers.className,
        }
      );

    } else {
      this.templateClass = "class.java"
      this.fs.copyTpl(
        this.templatePath(this.templateClass),
        this.destinationPath(this.answers.projectName + '/src/main/java/' + this.packageDir + this.answers.className + '.java'),
        {
          packageName: this.answers.packageName,
          retentionPolicy: this.answers.retentionPolicy,
          elementType: this.answers.elementType,
          className: this.answers.className,
        }
      );
    }
  }
}

