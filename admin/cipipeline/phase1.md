## Detail of the CI/CD Pipeline ##
The first step of the CI/CD Pipeline is listening to event.  
Our group mainly focus on four different events: Push, Pull Request Created, Issue Created and Pull Request merged.  
Then these events will trigger different github action workflow accordingly.  
At each time a contributor push the code, the github action will trigger the code quality tool such as codeclimate.  
The pull Requests will also trigger the action that requires human to review the code.
Then the github action will run the unit test. If there is no error it will deploy the application.  


 
 
