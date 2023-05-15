Feature: Inventory

    @demo @smoke @debug
    Scenario Outline: <TestID>: Book store by using Api
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        # And Get all books
        And Get value of <titleBook> book
        And User creates a valid account using API
        And Get the GenerateToken user is logged in
        # Then Verify that user is logged in with call the UserId and GenerateToken using API
        And User post a new book
        # Then Verify that the all the book shows in page
        # And User clicks on Login button in Book Store Page
        #     | UserType | Username |
        #     | StdUser  | asdf     |
        # And User clicks on <nameOfBook> to view the details of the the book
        # Then Get the value of the book and verify it
        # And User clicks on Add to Your Collection button
        # And User clicks on Back To Book Store button
        # And User clicks on Profile button
        # Then Verify that the all the book shows in page
        Examples:
            | TestID     | titleBook                          |
            # | INTV_TC001 | Git Pocket Guide               |
            # | INTV_TC001 | Learning JavaScript Design Patterns          |
            # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
            # | INTV_TC001 | Speaking JavaScript |
            | INTV_TC001 | Programming JavaScript Applications |
            # | INTV_TC001 | Understanding ECMAScript 6                 |
