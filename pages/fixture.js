import { test as base, expect, request } from '@playwright/test';
import LoginPage from './LoginPage.js';
import ProductPage from './ProductPage.js';
import CheckoutPage from './CheckoutPage.js';



export const test = base.extend({
 loginPage: async ({ page }, use) => {
   await use(new LoginPage(page));
 },

 productPage: async ({ page }, use) => {
  await use(new ProductPage(page));
},

 checkoutPage: async ({ page }, use) => {
  await use(new CheckoutPage (page));
},

api: async ({}, use) => {
  const api = await request.newContext({
    baseURL: 'https://fakestoreapi.com/',
    extraHTTPHeaders: {
      'x-api-key': 'free_user_3FiCAEoLcd0m6LycyT3n9sdwvud'
    }
  });

  await use(api);
  await api.dispose();
}

});




export { expect };
