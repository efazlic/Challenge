Feature: Testing Login for a Locked Out user

    A locked out user should not be able to log into the application

    Scenario: A locked out user should not be able to login to Swaglabs 
        Given Locked Out user launches the SwagLab site 
        And I insert the locked out username
        And I insert the password
        When I click the login button 
        Then I should see the error message