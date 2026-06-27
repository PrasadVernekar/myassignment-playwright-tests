import { test as base, expect, request } from '@playwright/test';
import LoginPage from './LoginPage.js';
import ProductPage from './ProductPage.js';


export const test = base.extend({
 loginPage: async ({ page }, use) => {
   await use(new LoginPage(page));
 },

 productPage: async ({ page }, use) => {
  await use(new ProductPage(page));
},

 


});


export { expect };
