# Find the Largest Product of Three Integers in a List
## Introduction
The following function takes a list of integers as an argument and will find the largest product of three integers in the list. The integers can include positives, negatives, and zeros.

Although the current implementation assumes you will want the product of three integers, the helper functions have been written with the idea that this may change in the future (say to 4 or 5).

## Installing

Clone the project into your desired directory

```
git clone https://github.com/aannarino/Ardoq_task1.git
```

Install packages to run the tests (this project uses Chai and Mocha)
```
npm install
```

## API
 
Include greatestProductOfNumbers using a rquirement statement
Example:
```
const greatestProductOfNumbers =  require('../index.js');
```

Pass in the list when using the function.
Example:
```
const greatestProductOfNumbers =  require('../index.js');

const list = [1,2,3,5];
const product = greatestProductOfNumbers(list);
//Should return 30
```


## Running the tests
Tests are located in the file called 'tests.js' within the folder called 'test'
To run the tests:

```
npm test
```


## Author

* **Anthony Annarino** 

