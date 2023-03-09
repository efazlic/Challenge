Feature: Testing Login for a Standard user - failed

    A standard user should experience an issue during login 

    Scenario: A standard user should be able to login to Swaglabs 
        Given Standard user opens the SwagLab site 
        And Standard user enters the wrong username
        And Standard user enters the wrong password
        When Standard user clicks the login button to log in the app
        Then Standard user should see correct error message