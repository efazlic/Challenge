Feature: Testing Login for a Locked Out user

    A locked out user should not be able to log into the application

    Scenario: A locked out user should not be able to login to Swaglabs 
        Given Locked Out user launches the SwagLab site 
        And Locked Out user inserts the locked out username
        And Locked Out user inserts the password
        When Locked Out user clicks the login button 
        Then Locked Out user should see the error message