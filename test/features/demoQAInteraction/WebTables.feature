@demo
Feature: Inventory


    Background: <TestID>: Login and clicks on one book
        # Given Login to inventory web app
        Given As a standard user I login to demoqa web app

    # add one item in json file  ->> DONE
    # Scenario: Practice in Web Table, User add a new item to the table then verify that  DONE
    #     When User clicks on Elements button in Elements page
    #     And User clicks on <buttons> button in Home page
    #     Then Verify that the all values in the table
    #     And User clicks on Add button in web table
    #     # And User wants to add a new item
    #     And User wants to add a list new item
    #     And User clicks on Submit button
    #     Then Verify that the new item is added


    #     Examples:
    #         | TestID     | buttons   |
    #         | INTV_TC001 | Web Tables |



    # add many item in json file --> DONE 
    # Scenario: Practice in Web Table, User add a new item to the table then verify that  DONE
    #     When User clicks on Elements button in Elements page
    #     And User clicks on <buttons> button in Home page
    #     Then Verify that the all values in the table
    #     And User wants to add a list new item
    #     Then Verify that the new item is added


    #     Examples:
    #         | TestID     | buttons    |
    #         | INTV_TC001 | Web Tables |





    # add many item in csv file   ->  DONE
    Scenario: Practice in Web Table, User add a new item to the table then verify that  DONE
        When User clicks on Elements button in Elements page
        And User clicks on <buttons> button in Home page
        Then Verify that the all values in the table
        And User wants to add a list new item by using CSV file
        Then Verify that the new item is added


        Examples:
            | TestID     | buttons    |
            | INTV_TC001 | Web Tables |








# using example datatable
#  Scenario: Practice in Web Table, User finds items in the table    DONE
#         When User clicks on Elements button in Elements page
#         And User clicks on <buttons> button in Home page
#         Then Verify that the all values in the table
#         And User wants to find <nameFind> in the table


#         Examples:
#             | TestID     | buttons    | nameFind |
#             | INTV_TC001 | Web Tables | alasdfasdf |
#             | INTV_TC001 | Web Tables | Cantrell |
            


# using example datatable   DONE
#  Scenario: Practice in Web Table, User finds items in the table then user wants delete it   
#         When User clicks on Elements button in Elements page
#         And User clicks on <buttons> button in Home page
#         Then Verify that the all values in the table
#         And User wants to find <nameFind> in the table
#         And User wants to delete <nameFind> in the table


#         Examples:
#             | TestID     | buttons    | nameFind |
#             | INTV_TC001 | Web Tables | comp |




# using datatable from json file
#  Scenario: Practice in Web Table, User finds items in the table    DONE
#         When User clicks on Elements button in Elements page
#         And User clicks on <buttons> button in Home page
#         Then Verify that the all values in the table
#         And User wants to find items in the table by reading json file

# Examples:
#             | TestID     | buttons    |
#             | INTV_TC001 | Web Tables | 






# Done - need to check more case with the error message
# Scenario: Practice in Web Table, User want to edit an item then verify that
#     When User clicks on Elements button in Elements page
#     And User clicks on <buttons> button in Home page
#     Then Verify that the all values in the table
#     And User clicks on Edit button of <item> to edit an item


#     Examples:
#         | TestID     | buttons   | item |
#         | INTV_TC001 | Web Tables | Cierra   |




