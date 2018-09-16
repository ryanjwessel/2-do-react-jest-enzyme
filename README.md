# 2-DO React/Jest/Enzyme

This is a simple todo application built using React, Jest, and Enzyme (among other tools). Except, this one is called 2-DO because that sounds much cooler :sunglasses:

## Thinking behind this project

Normally, I use Redux for the state management portion of my React apps. This time, I wanted to create an example of an application that includes unit testing in the build process by leveraging Jest and Enzyme, but also one that manages the state of the application through deliberate use of internal component state and pure functions.

## Getting Started

First, run `npm install`.

To initiate testing of the application, run `npm test`.

To fire up the dev server, run `npm start`.

To build production files, run `npm build`. This will run `npm test` first, and only build the files if all tests pass.