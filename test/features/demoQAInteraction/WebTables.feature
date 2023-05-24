@demo
Feature: Inventory


    Background: <TestID>: Login and clicks on one book
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app


    Scenario: Practice in Web Tables
        When User clicks on Elements button in Elements page
        And User clicks on <buttons> button in Home page
        Then Verify that the all values in the table
        # And User clicks on the <options> dropdown button

        Examples:
            | TestID     | buttons   |
            | INTV_TC001 | Web Tables | 





