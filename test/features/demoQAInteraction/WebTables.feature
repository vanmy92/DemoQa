@demo
Feature: Inventory


    Background: <TestID>: Login and clicks on one book
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app


    # Scenario: Practice in Web Table, User add a new item to the table then verify that  DONE
    #     When User clicks on Elements button in Elements page
    #     And User clicks on <buttons> button in Home page
    #     Then Verify that the all values in the table
    #     And User clicks on Add button in web table
    #     And User wants to add a new item
    #     And User clicks on Submit button
    #     Then Verify that the new item is added
        

    #     Examples:
    #         | TestID     | buttons   | 
    #         | INTV_TC001 | Web Tables | 

    Scenario: Practice in Web Table, User want to edit an item then verify that 
        When User clicks on Elements button in Elements page
        And User clicks on <buttons> button in Home page
        Then Verify that the all values in the table
        And User clicks on Edit button of <item> to edit an item
        

        Examples:
            | TestID     | buttons   | item |
            | INTV_TC001 | Web Tables | Cierra   |




