import { test as base, expect, request } from '@playwright/test';
import LoginPage from './LoginPage.js';



export const test = base.extend({
 loginPage: async ({ page }, use) => {
   await use(new LoginPage(page));
 },



});




export { expect };
