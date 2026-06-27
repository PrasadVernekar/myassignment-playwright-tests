import { test, expect } from '../pages/fixture.js';

test.describe('Shopping Cart', () => {

   test('should sort products by price in ascending order and update the cart badge', async ({ page, loginPage, productPage}) => {
   await loginPage.goto();
   await loginPage.validUser();
   await productPage.sortProduct();
   await expect(page.locator('.inventory_item_price').first())
       .toHaveText('$7.99');
   await productPage.addToCart();
   await expect(page.locator('//*[text()="2"]')).toBeVisible();
});


});
