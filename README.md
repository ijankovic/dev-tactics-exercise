# Dev-tactics-exercise

This is simple Hello World Node.js application that you can use for your Travis CI build exercise. 
It includes a basic API endpoint and a unit test to ensure that the application behaves as expected.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Running Tests](#running-tests)
5. [Travis CI Integration](#travis-ci-integration)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16, not higher due to Travis CI dependency)

## Usage

To start the application, run the following command:

node index.js

You can access the Hello World API by visiting http://localhost:3000/ in your web browser.

## Running tests

To run the unit tests for this application, execute the following command:

npm test

## Travis integration

This project is configured to run builds and tests on Travis CI. Once you push your changes to the repository, Travis CI will automatically trigger a build and run the tests defined in the project.

Please review .travis.yml as a basic example of a .travis.yml file for a Node.js project. 