Feature: Inventory

    # @demo @smoke @debug
    Scenario Outline: <TestID>: Demo Inventory
        # Given Login to inventory web app
        Given As a standard user I login to invertory web app
            | UserType | Username                |
            | StdUser  | standard_user           |
            # | ProbUser | problem_user            |
            # | PerfUser | performance_glitch_user |
        Then Inventory page should not     list <numberOfProducts>
        Then Validate all products have valid price
        # # Then Validate all products have valid price (price > 0)



        Examples:
            | TestID     | numberOfProducts |
            | INTV_TC001 | 6                |