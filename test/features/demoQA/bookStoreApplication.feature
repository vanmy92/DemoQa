Feature: Inventory

    # @demo @smoke @debug
    # Scenario Outline: <TestID>: Login and clicks on one book
    #     # Given Login to inventory web app
    #     Given As a standard user I login to demoqa web app
    #     And User clicks on Book Store Application Button
    #     Then Verify that the all the book shows in page
    #     And User clicks on Login button in Book Store Page
    #         | UserType | Username |
    #         | StdUser  | asdf     |
    #     And User clicks on <nameOfBook> to view the details of the the book
    #     Then Get the value of the book and verify it
    #     And User clicks on Add to Your Collection button
    #     And User clicks on Back To Book Store button
    #     And User clicks on Profile button
    #     Then Verify that the all the book shows in page
    #     Examples:
    #         | TestID     | nameOfBook                          |
    #         # | INTV_TC001 | Git Pocket Guide               |
    #         # | INTV_TC001 | Learning JavaScript Design Patterns          |
    #         # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
    #         # | INTV_TC001 | Speaking JavaScript |
    #         | INTV_TC001 | Programming JavaScript Applications |
    #         # | INTV_TC001 | Understanding ECMAScript 6                 |

 
    # check Again  Verify that the all the book shows in page not Done
    # @demo @smoke @debug
    # Scenario Outline: <TestID>: Login and clicks on each book then clicks on Add To Your Collection
    #     # Given Login to inventory web app
    #     Given As a standard user I login to demoqa web app
    #     And User clicks on Book Store Application Button
    #     Then Verify that the all the book shows in page
    #     And User clicks on Login button in Book Store Page
    #     And Verify that user clicked on each item and clicks on Add To Your Collection button
    #     And User clicks on Profile button
    #     Then Verify that the all the book shows in page
   
   
   
    #     # And User wants to see the all the items of the dropdowns
    #     # And User clicks on the Next button to view the next books   





    # case < 5 items in table of books   DONE
    # @demo @smoke @debug
    # Scenario Outline: <TestID>: Login and user want to delete the book  DONE
    #     # Given Login to inventory web app
    #     Given As a standard user I login to demoqa web app
    #     And User clicks on Book Store Application Button
    #     Then Verify that the all the book shows in page
    #     And User clicks on Login button in Book Store Page
    #     And User clicks on Profile button
    #     # And User wants to see the all the items of the dropdowns
    #     And User wants to delete the book <nameOfBook>
    #     Then Verify that the book <nameOfBook> is deleted
    #     Examples:
    #         | TestID     | nameOfBook                          |
    #     #     # | INTV_TC001 | Git Pocket Guide               |
    #         # | INTV_TC001 | Speaking JavaScript          |
    #         # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
    #         | INTV_TC001 | Git Pocket Guide |
    #         # | INTV_TC001 | Programming JavaScript Applications |
    #         # | INTV_TC001 | Understanding ECMAScript 6                 |






    # practicing


    # case > 5 items in table of books 
    # -> press Next button to view the next books 
    # -> then it will delete the book

    @demo @smoke @debug
    Scenario Outline: <TestID>: Login and user want to delete the book 
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app
        And User clicks on Book Store Application Button
        Then Verify that the all the book shows in page
        And User clicks on Login button in Book Store Page
        And User clicks on Profile button
        # And User wants to see the all the items of the dropdowns
        Then Verify that the books shows in the table pagination
        # And User wants to delete the book <nameOfBook>
        # Then Verify that the book <nameOfBook> is deleted
        # Examples:
            # | TestID     | nameOfBook                          |
        #     # | INTV_TC001 | Git Pocket Guide               |
            # | INTV_TC001 | Speaking JavaScript          |
            # | INTV_TC001 | Designing Evolvable Web APIs with ASP.NET            |
            # | INTV_TC001 | Git Pocket Guide |
            # | INTV_TC001 | Programming JavaScript Applications |
            # | INTV_TC001 | Understanding ECMAScript 6                 |


