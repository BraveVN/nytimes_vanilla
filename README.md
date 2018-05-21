Master: [![Build Status](https://travis-ci.org/BraveVN/nytimes_react.svg?branch=master)](https://travis-ci.org/BraveVN/nytimes_react)

Heroku: [![Build Status](https://travis-ci.org/BraveVN/nytimes_react.svg?branch=deploy-heroku)](https://travis-ci.org/BraveVN/nytimes_react)

Code Climate: [![Maintainability](https://api.codeclimate.com/v1/badges/c857590b6d4b7e2a97f5/maintainability)](https://codeclimate.com/github/BraveVN/nytimes_react/maintainability)

## NYTimes React 2018
This simple project is what I built when learning `ReactJS`. Data is fetched from [The New York Times' APIs](https://developer.nytimes.com/). The app is using `Flux` architect, styled by `Bootstrap`, including tests by `Jest` & `Enzyme`, also has `Travis` continuous integration & `Heroku` auto-deployment.

## Get it run on your local machine
1. Install `NodeJS` & `NPM` (Recommend Node v8.11.1 & npm v5.6.0)
2. Install dependencies

    `npm install`

3. Start the server:

    `npm run serve`

    or

    `gulp serve`

4. Run the test cases:

    `npm run test`

    If Jest snapshot tests are fail, update it: `npm run test:updateRenderer`

## Branch management
1. `develop` - This branch is used for development purpose
2. `master` - Master branch - the most stable code
3. `deploy-heroku` - Build & deploy on Heroku server

## Working flow
1. Check out `develop`
2. Fetch the code & rebase with `master`
3. Do your job
4. Commit & push code
5. Create a pull request to `master`
6. If `Travis` turns green & your code is well reviewed then it'll be merged to `master`
7. Wait for `Travis` to run on `master`
8. If it looks good then merge from `master` to `deploy-heroku`
9. Build & test the code locally
10. Commit & push code to Github. If `Travis` pass all test cases then the code will be autodeployed on Heroku server at: https://nytimes-react-2018.herokuapp.com/

