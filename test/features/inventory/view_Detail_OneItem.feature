Feature: Inventory

    # @demo @smoke @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to invertory web app
            | UserType | Username      |
            | StdUser  | standard_user |
        # | ProbUser | problem_user            |
        # | PerfUser | performance_glitch_user |
        # Then Inventory page should not     list <numberOfProducts>
        # Then Validate all products have valid price
        # # Then Validate all products have valid price (price > 0)
        And Verify the page have list item
        # When User clicks on <indexOfProductCart> Add to cart
        When User randomly clicks <randomItem> Add to Cart
        # And User clicks on Add to cart
        And User clicks on shopping cart      
        Then Verify Your cart


        # Examples:
        #     | TestID     | indexOfProductCart |
        #     | INTV_TC001 | 4                  |

        Examples:
            | TestID     | randomItem |
            | INTV_TC001 | 3          |
#  - Navigate to the inventory page.
# - Get a list of available items on the page using the page object's `getItems()` method.
# - Click the "Add to Cart" button for one or more items using the page object's `clickAddToCartButton()` method.
# - Click the cart icon in the top right corner of the page using the page object's `clickCartIcon()` method.
# - Get the list of items in the cart using the cart page object's `getCartItems()` method.
# - Verify that the selected items are in the cart using an assertion.