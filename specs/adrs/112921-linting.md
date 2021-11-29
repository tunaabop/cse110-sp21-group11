# Decision- Use a ESlint as linting tool
## Context and Problem Statement:
We want a tool that runs on static code to find formatting discrepancy, non-adherence to coding standards and conventions, and find logical errors in your program
## Considered Options  
*  JSLint
*  ESLint
*  Standard JS
## Decision Outcome: Chosen option: ESLint, because 
* Standard is a popular JavaScript code style guide built on top of ESLint. The tool can be used as a JavaScript style guide, linter, and formatter. It automatically formats code and catches style and programmer errors during the early development period. Developers adopt standard JS because it’s an open source framework.
* For VS code developers, ESLint can be configured easily
* JSHint catches a good number of issues once it’s properly configured. JSCS is a good choice if you only want to check your coding style. It has a huge number of available rules and it is a top pick if you don’t need anything other than coding style checks.
