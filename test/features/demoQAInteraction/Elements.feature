@demo
Feature: Inventory


    Background: <TestID>: Login and clicks on one book
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app

    # Scenario: Practice in elements
    #     When User clicks on Elements button in Elements page
    #     And User clicks on Text Box button
    #     Then Verify that the value after click submit button


    Scenario: Practice in elements
        When User clicks on Elements button in Elements page
        And User clicks on <buttons> button
        Then User clicks on <expandOrCollapse> button to check on or off

        Examples:
            | TestID     | buttons | expandOrCollapse |
            | INTV_TC001 | checkBox | Expand           |






