Feature: Testing Saucedemo functionalities for a Standard user

    A standard user should be able to buy a product

    Scenario: A standard user should be able to order the product
        Given Standard user launches the SwagLab site 
        And Standard user inserts the username
        And Standard user inserts the password
        When Standard user clicks the login button 
        Then Standard user can see the first product name
        And Standard user can see the first product price
        And Standard user should see the Add To Cart button text
        And Standard user clicks on the Add To Cart button
        And Standard user clicks on the cart
        And Standard user clicks the Continue Shopping button
        And Standard user adds another product 
        And Standard user removes the second product
        And Standard user clicks on the cart again 
        And Standard user clicks on checkout button
        And Standard user enters the first name
        And Standard user enters the last name
        And Standard user enters the zip code
        And Standard user clicks the Continue button
        And Standard user should see the item total value 
        And Standard user should see the tax value
        And Standard user should see correct total value
        And Standard user clicks the Finish button 
        And Standard user can see the final message
        And Standard user clicks Back Home button 
        And Standard user filters the product prices 
        And Values from the page will be written into .txt file 