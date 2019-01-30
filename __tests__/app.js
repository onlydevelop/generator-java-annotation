'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-java-annotation:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ projectName: 'projectName' });
  });

  it('creates files', () => {
    assert.file(['projectName/build.gradle']);
    assert.file(['projectName/Makefile']);
    assert.file(['projectName/src/main/java/Main.java']);
  });
});
