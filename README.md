# Jest Practice Repository

## Table of Contents:

- [Introduction](#introduction)
- [Usage](#usage)
- [Installation](#installation)
- [Reference](#reference)
- [License](#license)

## Introduction

This repository is for practicing with **Jest** and improving my skills as a developer, taking the official documentation as a guide.

## Usage

At the moment, I am testing it with **Vanilla JS**. However, I will also try it with **PHP, React, and Python**.

## Installation

> [!NOTE]
> Jest is a testing library for JavaScript that allows you to set up a test environment in your project.

> [!IMPORTANT]
> This is the way I installed it using WSL2 (Windows Subsystem for Linux) and NodeJs. I recommend using the official documentation for a better understanding or if you want to try another version.

To install **Jest**, follow these steps:

```bash
    npm install --save-dev jest
```

In the `package.json`, you will see:

```
  "devDependencies": {
    "jest": "^29.7.0"
    // The ^ symbol must be deleted to prevent it from updating
    // automatically, since it can affect your projects
    // for the changes that Jest can make.
  },
```

To facilitate its use, I recommend you add:

```
  "scripts": {
    "test": "jest --verbose"
    // Placing the joke `--verbose` will not provide as much information
    // as possible if there are any errors.
  },

  "jest": {
    "testEnvironment": "node"
    // With this configuration, you are telling Jest that your execution
    // environment is Node since by default it is the client.
  }
```

## Reference

The information shown is from:

- **_Jest_**[^1].
- midudev[^2].

[^1]: [**JEST**](https://jestjs.io/).
[^2]: [**midudev**](https://www.youtube.com/watch?v=_DzBez4qMi0).

## License

This project is licensed under the [MIT License](LICENSE)
