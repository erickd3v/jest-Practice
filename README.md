# Jest Practice Repository

## Table of Contents:
- [Introduction](#introduction).
- [Usage](#usage).
- [Intallation](#installation).
- [Reference](#reference).
- [License](#license).

## Introduction

This repository is to practice with ***Jest*** and improve my skills as a developer, taking the official documentation as a guide.

## Usage

At the moment I am testing it with ***Vanilla JS***, however I will also try it with **PHP, React and Python**.

### Installation

> [!IMPORTANT]
> This is the way I installed it using WSL2 (Windows Subsystem for Linux) and NodeJs, I recommend using the official documentation for a better understanding or if you want to try another version.

To install **Jest** you must follow the following steps:

```
    npm install --save-dev jest
```

En el package.json te aparecera lo siguiente:

```
  "devDependencies": {
    "jest": "^29.7.0" 
    > EL simbolo ^ se debe borrar para evitar que se actualice
    de forma automantica, ya que puede afectar a tus proyectos
    por los cambios que pueda realizar Jest <
  },
```

Para facilicar su uso te recomiendo colocar lo siguiente:

```
  "scripts": {
    "test": "jest --verbose"
  },
  
  "jest": {
    "testEnvironment": "node"
  }
```

### Reference

La información mostrada es por parte de:
- ***Jest***[^1].
- midudev[^2].

[^1]:[**JEST**](https://jestjs.io/).
[^2]:[**midudev**](https://www.youtube.com/watch?v=_DzBez4qMi0).

### License

This project is licensed under the [MIT License](LICENSE)