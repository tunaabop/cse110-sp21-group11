## Detail of the CI/CD Pipeline ##
The first step of the CI/CD Pipeline involves listening to events based on Github Actions. 
Our group mainly focus on four different events in Github: Push, Pull Request Created, Issue Created and Pull Request merged.  

When one of the above events happens, the corresponding github action workflow will be triggered accordingly.  

At each time a contributor push the code, the corresponding Github Action will trigger the code quality tool such as Codeclimate.  
Each pull request made will also trigger the action that requires our members to review the code.

Issues are created for tasks to be worked on as well as any problems we run into during testing. Then the github action will then run the unit test. Issues are resolved as we merge pull requests. If there is no error it will deploy the application.  


 
 
