Feature: Testing Login for a Performance Glitch user

    A performance glitch user should not be able to log into the application with incorrect password

    Scenario: A performance glitch user should not be able to login to Swaglabs with incorrect password
        Given Performance Glitch user launches the SwagLab site
        And Performance Glitch user inserts the username
        And Performance Glitch user inserts the incorrect password
        When Performance Glitch user clicks the login button 
        Then Performance Glitch user should see the error message