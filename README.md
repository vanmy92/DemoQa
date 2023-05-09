# WDIO_CUCUMBER_TS_E2E_1
npx run wdio wdio.conf.ts
npm install --save-dev chai
npm i --save-dev dotenv
// 26/4
npm i --save-dev winston
// have some an issue with set up logger -> data folder

 npm i -g allure-commandline --save-dev


npm run test:demo

27/4 
npm i --save-dev supertest
npm i --save-dev @types/supertest



Sure, here are step-by-step instructions for each of the test scenarios I provided:

1. Verify that the user can add items to the cart from the inventory page:
- Navigate to the inventory page.
- Get a list of available items on the page using the page object's `getItems()` method.
- Click the "Add to Cart" button for one or more items using the page object's `clickAddToCartButton()` method.
- Click the cart icon in the top right corner of the page using the page object's `clickCartIcon()` method.
- Get the list of items in the cart using the cart page object's `getCartItems()` method.
- Verify that the selected items are in the cart using an assertion.

2. Verify that the user can remove items from the cart:
- Navigate to the inventory page.
- Get a list of available items on the page using the page object's `getItems()` method.
- Add one or more items to the cart using the page object's `clickAddToCartButton()` method.
- Click the cart icon in the top right corner of the page using the page object's `clickCartIcon()` method.
- Get the list of items in the cart using the cart page object's `getCartItems()` method.
- Click the "Remove" button for one or more items in the cart using the cart page object's `clickRemoveButton()` method.
- Verify that the selected items are no longer in the cart using an assertion.

3. Verify that the user can sort items by price:
- Navigate to the inventory page.
- Click the "Price" button to sort the items by price using the inventory page object's `clickPriceButton()` method.
- Get the list of items on the page using the inventory page object's `getItems()` method.
- Verify that the items are sorted in ascending or descending order by price using an assertion.

4. Verify that the user can search for items by name:
- Navigate to the inventory page.
- Enter a search term in the search bar using the inventory page object's `enterSearchTerm()` method.
- Click the search button using the inventory page object's `clickSearchButton()` method.
- Get the list of items on the page using the inventory page object's `getItems()` method.
- Verify that the search results include items that match the search term using an assertion.

5. Verify that the user can view item details:
- Navigate to the inventory page.
- Click on an item using the inventory page object's `clickItem()` method.
- Get the item details using the item details page object's `getItemDetails()` method.
- Verify that the item details page displays information about the selected item, including its name, description, and price using an assertion.

6. Verify that the user can log in and log out:
- Navigate to the login page.
- Enter valid login credentials using the login page object's `login()` method.
- Click the login button using the login page object's `clickLoginButton()` method.
- Verify that the user is redirected to the inventory page using an assertion.
- Click the menu icon in the top right corner of the page using the inventory page object's `clickMenuIcon()` method.
- Click the "Logout" button using the inventory page object's `clickLogoutButton()` method.
- Verify that the user is redirected to the login page using an assertion.

These step-by-step instructions assume that you have already created page objects for the inventory page, cart page, item details page, and login page, and that you have defined methods in these page objects to perform the necessary actions and retrieve information from the page.