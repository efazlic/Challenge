Feature: Testing Login for a Problem user

    A problem user should not be able to log into the application with incorrect password

    Scenario: A problem user should not be able to login to Swaglabs with incorrect password
        Given Problem user launches the SwagLab site 
        And Problem user inserts the username
        And Problem user inserts the incorrect password
        When Problem user clicks the login button 
        Then Problem user should see the error message