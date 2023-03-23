# Gilded Rose Kata

This program is an implementation of the Gilded Rose Kata, which is a popular coding exercise that involves modifying and extending an existing codebase to add new features while maintaining existing functionality.

The original codebase consists of a system that tracks inventory for a fictional store called the Gilded Rose. The inventory consists of various items, each of which has a name, a sell-in value (i.e., the number of days remaining before the item expires), and a quality value (i.e., the perceived value or desirability of the item).

My substantive changes to the production code involve adding behaviour to deal with a category of 'conjured' items which degrade at twice the speed of normal items.

This program has been implemented using JavaScript and Jest testing framework. The code has been refactored and optimized to support the new requirements mentioned in the brief.

# How to run the program
To run the program, follow the below steps:

1) Clone the repository to your local machine.

2) Navigate to the js-jest directory using the terminal.

3) Install the required dependencies by running the command:

```
npm install
```

Run the tests by running the command:

```
npm test
```

The tests will run, and you will see the output in the terminal.

To generate test coverage report:

```
npm run test:coverage
```

# Approach

The legacy codebase for this task contained extensive conditional logic for the existing three items, but only one test (which failed). I first set out to broaden the testing suite, asserting on each of items decay properties in sequence.

Once this was done, I added logic to deal with conjured items into the legacy production code, testing for the presence of the substring 'conjured' (case insensitive) in the name field. I wrote tests to cover these cases (capital C 'Conjured' and lower-case c 'conjured') and a unified test for multiple items.

After debugging, my next task was reformat my production code with readability and modularity in mind. I chose to use case statements to house the conditional logic and built the decay behaviour into dedicated methods for each object. One challenge with this technique was that case statements - relying on strict equality - could not handle the pattern matching I had used to address the case-insensitivity, so I simply moved this path into a dedicated if statement before the case statements kicked in.

Finally, I refactored the dedicated methods to use ternary conditionals in place of if/else statements to further streamline the final code.

# Additional Information

This program has been implemented using ES6 syntax, and Jest testing framework has been used to test the program.

The src folder contains the code for the program, and the test folder contains the test cases.

The program has been designed to be modular and extensible, making it easy to add new features or modify existing ones.

If you encounter any issues or have any questions, please feel free to raise an issue in the repository.