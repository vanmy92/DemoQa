Feature: Inventory

    @demo @smoke @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        Then Verify that the all the book shows in page
