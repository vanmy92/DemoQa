Feature: Inventory

    # @demo @smoke @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        And User clicks on Login button
        Then Verify that the user is at Login page
        
        # Then Verify that the all the book shows in page
        # And User clicks on <nameOfBook> to view the details of the the book

        # Examples:
        # | TestID     | nameOfBook                        |
        # | INTV_TC001 | Git Pocket Guide               |
        # | INTV_TC001 | Learning JavaScript Design Patterns          |
        # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
        # | INTV_TC001 | Speaking JavaScript |
        # | INTV_TC001 | Programming JavaScript Applications           |
        # | INTV_TC001 | Understanding ECMAScript 6                 |
