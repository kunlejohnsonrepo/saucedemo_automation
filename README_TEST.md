# Cypress Test Automation

This project uses Cypress to run an End to End test for [saucedemo.com](https://www.saucedemo.com/) e-commerce website.

## Usage

To get started, 
- Create a directory and clone or download the project.
- Navigate to the **saucedemo_automation** folder
- Run npm install (installs all the need package and dependencies)
- Run './node_modules/.bin/cypress open' to open the Test runner and select the requires test file in the **tests** folder
- To run all test: 
```
./node_modules/.bin/cypress run --spec "cypress/integration/tests/*.js"
```
OR
```
npx cypress run --spec "cypress/integration/tests/*.js"
```
To run in headed mode (with the default browser)
```
./node_modules/.bin/cypress run --spec "cypress/integration/tests/*.js" --headed
```
To run in headed mode with the Chrome browser
```
./node_modules/.bin/cypress run --spec "cypress/integration/tests/*.js" --headed --browser chrome
```

- A Mochawesome report will be generated for all test run in cypress/report.



### Tests

The test was implemented using the Page Object Model (POM) design pattern where each webpage has a page class and a corresponding test. Also to help reduce code duplication some utility functions were created and called where required. Also data driven testing framework were used for maintainability purpose.

The tests folder consists of 6 spec files with various assertions included.


1. *login.js* 
1. *inventory.js*
1. *cart.js* : 
1. *information.js*
1. *overview.js*
1. *complete_order.js*

### Docker

The application has been dockerised. 

*Build*
```
docker build -t cypress_saucedemo .
```
*Run*
```
docker run <image_id>
```

*Snippet of the output*

```
...
====================================================================================================

  (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  tests/cart.js                            00:28        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/complete_order.js                  00:10        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/information.js                     00:19        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/inventory.js                       00:09        7        7        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/login.js                           00:05        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/overview.js                        00:30        6        6        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        01:42       28       28        -        -        -  

```

*Screenshot*

A folder /cypress/screenshots exist to capture screenshots of failed tests.