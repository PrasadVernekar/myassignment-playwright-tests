import { test, expect } from '../pages/fixture.js';


test.describe('Checkout', () => {
   test('should complete checkout successfully', async ({page, loginPage, productPage, checkoutPage  }) => {
   await loginPage.goto();
   await loginPage.validUser();
   await productPage.addToCart();
   await checkoutPage.completeOrder();
   await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
});


test('should navigate to checkout information page', async ({ page, loginPage, productPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
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


test('should navigate back to products page after clicking Back Home', async ({ page, loginPage, productPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await checkoutPage.completeOrder();
    await page.getByRole('button', { name: 'Back Home' }).click();
    await expect(page.getByText('Products')).toBeVisible();
});


test('should display error when first name is empty', async ({ page, loginPage, productPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await checkoutPage.enterCheckoutInformation('', 'Vernekar', '560066');
    await expect(page.getByText('Error: First Name is required')).toBeVisible();
});


test('should display error when last name is empty', async ({ page, loginPage, productPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await checkoutPage.enterCheckoutInformation('Prasad', '', '560066');
    await expect(page.getByText('Error: Last Name is required')).toBeVisible();
});


test('should display error when postal code is empty', async ({ page, loginPage, productPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await checkoutPage.enterCheckoutInformation('Prasad', 'Vernekar', '');
    await expect(page.getByText('Error: Postal Code is required')).toBeVisible();
});


test('should display error when all checkout fields are empty', async ({ page, loginPage, productPage, checkoutPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await productPage.addToCart();
    await checkoutPage.enterCheckoutInformation('', '', '');
    await expect(page.getByText('Error: First Name is required')).toBeVisible();
});


});
