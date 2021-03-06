# generator-java-annotation [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Creates a generator for Java project with annotation

## Installation

First, install [Yeoman](http://yeoman.io) and generator-java-annotation using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-java-annotation
```

Then generate your new project:

```bash
$ yo java-annotation

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the swell   │
    |--(o)--|    │ generator-java-annotatio │
   `---------´   │       n generator!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Project name example
? Package Name com.example
? Java Version 1.8
? Gradle Version 5.1
? JUnit Version 4.12
/Users/dipanjan/anvil/yeoman/generator-java-annotation
   create example/build.gradle
   create example/Makefile
   create example/src/main/java/Main.java
```

And generate your class file:

```bash
$ yo java-annotation:class

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the swell   │
    |--(o)--|    │ generator-java-annotatio │
   `---------´   │       n generator!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Project name example
? Class name Calculator
? Package Name com.example
? Would you like to add test file? Yes
   create example/src/main/java/com/example/Calculator.java
   create example/src/test/groovy/com/example/CalculatorSpec.groovy
```

Creating annotation interface:

```bash
$ yo java-annotation:annotation

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the swell   │
    |--(o)--|    │ generator-java-annotatio │
   `---------´   │       n generator!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Package Name com.example
? Project name example
? Class name TestAnnotation
? Retention Policy? RUNTIME
? Element Type? METHOD
   create example/src/main/java/com/example/TestAnnotation.java
```

Creating annotation runner:

```bash
$ yo java-annotation:annotation-runner

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the swell   │
    |--(o)--|    │ generator-java-annotatio │
   `---------´   │       n generator!       │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Package Name com.example
? Project name example
? Class name AnnotationRunner
? Gradle Version 5.1
   create example/src/main/java/com/example/AnnotationRunner.java
   create example/build.gradle
   create example/Makefile
```
## Testing

Create the gradle Wrapper:

```bash
$ gradle wrapper

BUILD SUCCESSFUL in 0s
1 actionable task: 1 executed

```

Run the test:

```bash
$ ./gradlew test

BUILD SUCCESSFUL in 5s
3 actionable tasks: 2 executed, 1 up-to-date
```

Create the Jar file:

```bash
$ ./gradlew jar

BUILD SUCCESSFUL in 1s
2 actionable tasks: 2 executed
```

Execute the jar file:

```bash
$ make run
./gradlew jar && java -jar ./build/libs/example-0.1.0.jar

BUILD SUCCESSFUL in 0s
2 actionable tasks: 2 up-to-date
Hello, world!
```

You can run the same `make run` command for the annotation test.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Dipanjan Bhowmik](https://onlydevelop.github.io/)


[npm-image]: https://badge.fury.io/js/generator-java-annotation.svg
[npm-url]: https://npmjs.org/package/generator-java-annotation
[travis-image]: https://travis-ci.org/onlydevelop/generator-java-annotation.svg?branch=master
[travis-url]: https://travis-ci.org/onlydevelop/generator-java-annotation
