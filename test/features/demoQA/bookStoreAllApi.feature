Feature: Inventory

    # @demo @smoke @debug
    # Scenario Outline: <TestID>: Book store by using Api
    #     # Given Login to inventory web app
    #     Given As a standard user I login to demoqa web app
    #     And User clicks on Book Store Application Button
    #     And Get all books
    #     And Get value of <titleBook> book
    #     And User creates a valid account using API
    #     And Get the GenerateToken user is logged in
    #     Then Verify that user is logged in with call the UserId and GenerateToken using API
    #     # And User post a new book   NOT Done


    #     # Then Verify that the all the book shows in page
    #     # And User clicks on Login button in Book Store Page
    #     #     | UserType | Username |
    #     #     | StdUser  | asdf     |
    #     # And User clicks on <nameOfBook> to view the details of the the book
    #     # Then Get the value of the book and verify it
    #     # And User clicks on Add to Your Collection button
    #     # And User clicks on Back To Book Store button
    #     # And User clicks on Profile button
    #     # Then Verify that the all the book shows in page
    #     Examples:
    #         | TestID     | titleBook                          |
    #         # | INTV_TC001 | Git Pocket Guide               |
    #         # | INTV_TC001 | Learning JavaScript Design Patterns          |
    #         # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
    #         # | INTV_TC001 | Speaking JavaScript |
    #         | INTV_TC001 | Programming JavaScript Applications |
    #         # | INTV_TC001 | Understanding ECMAScript 6                 |








    # // not Done
    #   @demo @smoke @debug
    #     Scenario Outline: <TestID>: User login with defualt username+password then user want to edit the book
    #         # Given Login to inventory web app
    #         Given As a standard user I login to demoqa web app
    #         And User clicks on Book Store Application Button
    #         And User clicks on Login button in Book Store Page
    #             | UserType | Username |
    #             | StdUser  | asdf     |
    #         # And Get all books
    #         # And Get value of <titleBook> book
    #         # And User creates a valid account using API
    #         # And Get the GenerateToken user is logged in
    #         # Then Verify that user is logged in with call the UserId and GenerateToken using API
    #         # And User post a new book   NOT Done

    #         Examples:
    #             | TestID     | titleBook                          |
    #             # | INTV_TC001 | Git Pocket Guide               |
    #             # | INTV_TC001 | Learning JavaScript Design Patterns          |
    #             # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
    #             # | INTV_TC001 | Speaking JavaScript |
    #             | INTV_TC001 | Programming JavaScript Applications |
    #             # | INTV_TC001 | Understanding ECMAScript 6                 |



    # @demo @smoke @debug
    # Scenario Outline: <TestID>: User login then user want to GET value the BOOK
    #     # Given Login to inventory web app
    #     Given As a standard user I login to demoqa web app
    #     And User clicks on Book Store Application Button
    #     And User clicks on Login button in Book Store Page
    #     And Get all books
    #     And Get all the value of <titleBook> book
    #     Examples:
    #         | TestID     | titleBook                           |
    #         | INTV_TC001 | Programming JavaScript Applications |


    @demo @smoke @debug
    Scenario Outline: <TestID>: User login then user want to POST Books
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        And User clicks on Login button in Book Store Page
        And Get all books
        And Get all the value of <titleBook> book
        And User post a new book
        Examples:
            | TestID     | titleBook                           |
            | INTV_TC001 | Programming JavaScript Applications |
        





