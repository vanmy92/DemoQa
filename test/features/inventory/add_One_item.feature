Feature: Inventory

# @demo @smoke @debug
# Scenario Outline: <TestID>: Verify and shown all items cart
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     # | ProbUser | problem_user            |
#     # | PerfUser | performance_glitch_user |
#     Then Inventory page should not     list <numberOfProducts>
#     And Verify the page get all items
#     Examples:
#         | TestID     | numberOfProducts |
#         | INTV_TC001 | 6                |



# @demo @smoke @debug
# Scenario Outline: <TestID>: User wants to click on item by name in inventory DONE Explain
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     When User clicks on <nameOfItem> Add to cart
#     Examples:
#         | TestID     | nameOfItem                        |
#         | INTV_TC001 | Sauce Labs Backpack               |
#         | INTV_TC001 | Sauce Labs Fleece Jacket          |
#         | INTV_TC001 | Sauce Labs Bike Light             |
#         | INTV_TC001 | Test.allTheThings() T-Shirt (Red) |
#         | INTV_TC001 | Sauce Labs Bolt T-Shirt           |
#         | INTV_TC001 | Sauce Labs Onesie                 |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User wants to click on item by index
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     When User clicks on <indexOfProductCart> Add to cart
#     Examples:
#         | TestID     | indexOfProductCart |
#         | INTV_TC001 | 0                  |
#         | INTV_TC001 | 1                  |
#         | INTV_TC001 | 3                  |
#         | INTV_TC001 | 2                  |
#         | INTV_TC001 | 3                  |
#         | INTV_TC001 | 5                  |
# | INTV_TC001 | 6                  |



# @demo @smoke @debug
# Scenario Outline: <TestID>: User wants to click on random the number of items
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     When User randomly clicks <randomItem> Add to Cart
#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 4          |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User add some cart items and then to click on the shopping cart
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     When User randomly clicks <randomItem> Add to Cart
#     And User clicks on shopping cart button
#     Then Verify <randomItem> cart items that the user clicked add to cart

#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 4          |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User add some cart items and enter all valid value of checkout Your Information Page
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     When User randomly clicks <randomItem> Add to Cart
#     And User clicks on shopping cart button
#     Then Verify <randomItem> cart items that the user clicked add to cart
#     And User clicks on Checkout button
#     Then User enters all values correctly
#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 4          |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User add some cart items and user see all items in the Checkout: Overview Page
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     When User randomly clicks <randomItem> Add to Cart
#     And User clicks on shopping cart button
#     Then Verify <randomItem> cart items that the user clicked add to cart
#     And User clicks on Checkout button
#     Then User enters all values correctly
#     And User clicks on Continue button
#     Then Confirm the total price of all products
#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 4          |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User add some cart items and want to finish the order
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     When User randomly clicks <randomItem> Add to Cart
#     And User clicks on shopping cart button
#     Then Verify <randomItem> cart items that the user clicked add to cart
#     And User clicks on Checkout button
#     Then User enters all values correctly
#     And User clicks on Continue button
#     Then Confirm the total price of all products
#     And User clicks on finish button
#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 3          |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User wants to get the item with price condition
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And User want to show item have price <condition> <value> dollars
#     Examples:
#         | TestID     | condition | value |
#         | INTV_TC001 | >       | 29.99 |
#         | INTV_TC001 | >=       | 29.99 |
#         | INTV_TC001 | ==       | 15.99 |
#         | INTV_TC001 | <=        | 9.99 |
#         | INTV_TC001 | <        | 9.9 |



# @demo @smoke @debug
# Scenario Outline: <TestID>: User wants to get and add to cart some items with price condition
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And User want to show item have price <condition> <value> dollars
#     And User want to add to cart all item have price <condition> <value> dollars

#     Examples:
#         | TestID     | condition | value |
#         | INTV_TC001 | >=         | 29.99 |
# | INTV_TC001 | ==        | 29.99 |
# | INTV_TC001 |  ==       | 15.99 |
# | INTV_TC001 |  <=        | 9.99 |
# | INTV_TC001 |  >        | 7.99 |





# @demo @smoke @debug
# Scenario Outline: <TestID>: Verify that user wants to click each item and then vefiry thapp if user clicks on Rest App State button
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     When User randomly clicks <randomItem> Add to Cart
#     And User clicks on shopping cart button
#     And User clicks on menu button
#     And User clicks on the Rest App State
#     Then Verify the the item in the shopping cart after user rest app state
#     And User clicks on All Items button
#     Then Verify the all item is not clicked after user rest app state

#     Examples:
#         | TestID     | randomItem |
#         | INTV_TC001 | 4          |



# @demo @smoke @debug
# Scenario Outline: <TestID>: Verify that user wants to click to view each item and click add to cart in that item   DONE Explain
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     And Verify that user clicked on each item and click add to cart
#     And User clicks on shopping cart button
#     And User clicks on Checkout button
#     Then User enters all values correctly
#     And User clicks on Continue button
#     Then Confirm the total price of all products
#     And User clicks on finish button




# @demo @smoke @debug
# Scenario Outline: <TestID>: Get all value of the short button
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     And User clicks on the short button



# @demo @smoke @debug
# Scenario Outline: <TestID>: varify the value of the short button after User clicks on Price (low to high) button
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify the page get all items
#     And User clicks on the short button
#     And Verify i click the select <index> short options
#     Then Verify the value page after user clicks on Price low to high button


#     Examples:
#         | TestID     | index |
#         | INTV_TC001 | 2    |


# @demo @smoke @debug
# Scenario Outline: <TestID>: User want to click any short options  DONE Explain
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     And Verify i click the select <nameofDropdown> options


#     Examples:
#         | TestID     | nameofDropdown |
#         | INTV_TC001 | Name (Z to A)    |
#         | INTV_TC001 | Name (A to Z)    |
#         | INTV_TC001 | Price (high to low)    |
#         | INTV_TC001 | Price (low to high)    |


















# And Verify i click randomly the selected short options notDone
# And Verify i click the select <index> short options



# Scenario Outline: <TestID>: Demo Inventory
#     # Given Login to inventory web app
#     Given As a standard user I login to invertory web app
#         | UserType | Username      |
#         | StdUser  | standard_user |
#     # | ProbUser | problem_user            |
#     # | PerfUser | performance_glitch_user |
#     # Then Inventory page should not     list <numberOfProducts>
#     # Then Validate all products have valid price
#     # # Then Validate all products have valid price (price > 0)
#     And Verify the page have list item
#     And User want to show item have price <condition> <value> dollars
#     # And User want to add to cart all item have price > <value> dollars
#     And User want to add to cart all item have price <condition> <value> dollars

#     # Done
#     # And Verify i click randomly the selected short options notDone
#     # And Verify i click the select <index> short options
#     # And User clicks on the short button  notdone
#     # And User clicks on <item> item to view detailed information
#     # And User clicks on Add to Cart button
#     # And User clicks on Back to Products button
#     # And User clicks on shopping cart
#     # And User clicks on Checkout button
#     # Then User enters all values correctly

#     # When User clicks on <indexOfProductCart> Add to cart
#     # When User randomly clicks <randomItem> Add to Cart
#     # And User clicks on Add to cart button
#     # And User clicks on shopping cart button
#     #         And User clicks on Checkout button
#     # Then User enters all values correctly
#     # And User clicks on Continue button
#     # Then Confirm the total price of all products
#     #    stuck?
#     # Then Verify Your cart    1/2


#     # Examples:
#     #     | TestID     | indexOfProductCart |
#     #     | INTV_TC001 | 0                  |
#     #     | INTV_TC001 | 1                  |
#     #     | INTV_TC001 | 3                  |
#     #     | INTV_TC001 | 2                  |
#     #     | INTV_TC001 | 4                  |
#     #     | INTV_TC001 | 5                  |
#         # | INTV_TC001 | 6                  |



#     # Examples:
#     #     | TestID     | randomItem |
#     #     | INTV_TC001 | 4          |

#     # Examples:
#     #     | TestID     | item |
#     #     | INTV_TC001 | 3    |
#     # Examples:
#     #     | TestID     | index |
#     #     | INTV_TC001 | 1    |
#     Examples:
#         | TestID     |  condition | value |
#         | INTV_TC001 |  >=      |  15.99   |

