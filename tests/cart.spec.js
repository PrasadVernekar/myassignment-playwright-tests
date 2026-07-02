import { test, expect } from '../pages/fixture.js';


test.describe('Shopping Cart', () => {

    test('should sort products by price in ascending order and update the cart badge', async ({ page, loginPage, productPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.sortProduct();
        await expect(page.locator('.inventory_item_price').first())
            .toHaveText('$7.99');
        await productPage.addToCart();
        await expect(page.locator('//*[text()="2"]')).toBeVisible();
    });


    test('should remove a product from the cart', async ({ page, loginPage, productPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await productPage.removeBackpack();
        await expect(page.locator('.shopping_cart_badge'))
            .toHaveText('1');
    });


    test('should display added products in the cart', async ({ page, loginPage, productPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await productPage.openCart();
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
        await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
    });


    test('should remove all products and hide cart badge', async ({ page, loginPage, productPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await productPage.removeAllProducts();
        await expect(page.locator('.shopping_cart_badge'))
            .toHaveCount(0);
    });


    test('should navigate to checkout overview page', async ({ page, loginPage, productPage, checkoutPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await checkoutPage.enterCheckoutInformation(
            'Prasad',
            'Vernekar',
            '560066'
        );
        await expect(page.getByText('Checkout: Overview')).toBeVisible();
    });


    test('should display error when first name is empty', async ({ page, loginPage, productPage, checkoutPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await checkoutPage.enterCheckoutInformation(
            '',
            'Vernekar',
            '560066'
        );
        await expect(
            page.getByText('Error: First Name is required')
        ).toBeVisible();
    });


    test('should display error when last name is empty', async ({ page, loginPage, productPage, checkoutPage }) => {
        await loginPage.goto();
        await loginPage.validUser();
        await productPage.addToCart();
        await checkoutPage.enterCheckoutInformation(
            'Prasad',
            '',
            '560066'
        );
        await expect(
            page.getByText('Error: Last Name is required')
        ).toBeVisible();
    });

});
