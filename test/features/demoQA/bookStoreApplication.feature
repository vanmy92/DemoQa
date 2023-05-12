Feature: Inventory

    # @demo @smoke @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        Then Verify that the all the book shows in page
        And Verify get all the value of the book by call api
        And User clicks on <nameOfBook> to view the details of the the book
        Then Get all the value of the book and verify it
        And Verify get the value of the <nameOfBook> book by call api

        Examples:
        | TestID     | nameOfBook                        |
        # | INTV_TC001 | Git Pocket Guide               |
        # | INTV_TC001 | Learning JavaScript Design Patterns          |
        # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
        # | INTV_TC001 | Speaking JavaScript |
        | INTV_TC001 | Programming JavaScript Applications           |
        # | INTV_TC001 | Understanding ECMAScript 6                 |
