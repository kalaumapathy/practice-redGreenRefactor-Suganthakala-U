Test-Driven Development (TDD): countVowels

Project Overview
This project demonstrates **Test-Driven Development (TDD)** using the **Red, Green, Refactor** cycle.  
The goal is to build a simple and reliable function that counts vowels in a string while following industry-standard testing practices.

Feature Implemented
### Function: `countVowels(string)`
Counts the number of vowels (`a, e, i, o, u`) in a given string, including uppercase and lowercase characters.


Example Behavior

| Input     | Output |
|-----------|--------|
| "hello"   | 2      |
| "world"   | 1      |
| ""        | 0      |
| "AEIOU"   | 5      |
| "OpenAI"  | 4      |



## TDD Workflow

### 🔴 Red Phase
- Write a failing test before writing any implementation.
- Ensures requirements are clearly defined.
- Confirms the test framework is working correctly.

### 🟢 Green Phase
- Implement the simplest possible solution to pass the test.
- Focus on correctness over optimization.
- Quickly validate expected behavior.

### 🔵 Refactor Phase
- Improve code structure without changing functionality.
- Enhance readability, maintainability, and scalability.
- Ensure all tests continue to pass.

Testing Strategy

This project uses **Jest** for unit testing.

### Covered Scenarios:
- Standard lowercase strings
- Uppercase input handling
- Empty string input
- Strings with no vowels
- Mixed-case strings
- Edge-case validation

practice-redGreenRefactor-Suganthakala-U
│
├── package.json
├── countVowels.js
├── countVowels.test.js
└── README.md

Setup & Execution
 1. Install Dependencies
npm install

2. Run Tests
npm test