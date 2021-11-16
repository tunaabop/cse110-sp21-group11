# Detail of the CI/CD Pipeline ##

## Event Listening
The first step of the CI/CD Pipeline involves listening to events based on Github Actions. 
Our group mainly focus on four different events in Github: 

  Push, Pull Request Created, Issue Created and Pull Request merged.  

  ### Github Action Workflow
  When one of the above events happens, the corresponding github action workflow will be triggered accordingly.  

## Checking Code Quality

(Using Tool)
- At each time a contributor pushes the code, the corresponding Github Action will trigger the code quality tool such as Codeclimate. 

(Using Human Review)
- Code quality will also be covered by human review through pull request made, which will also trigger the action that requires our members to review the code.

## Testing/Linting
Issues are created for tasks to be worked on as well as any problems we run into during testing. For each github issue created, we will be testing/fixing code on local machine. After so we create pull requests to merge and run github actions. Meanwhile, in terms of linting and code style enforcement, we are going to be installing and using ESLint across branches when we are working locally to check and enforce code style.

## Unit/E2E Testing
The github action will then run the corresponding unit test. We are planning to run unit tests through automation with Jest. If test runs successfully, we will be able to merge pull request to main, which will be reviewed and if failed, another issue would be created. If there is no error it will deploy the application. We are planning to deploy our Single Page Application using Netlify. 

Check phase1.png under cipipeline for our pipeline diagram.
 
 
