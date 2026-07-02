import { test, expect } from '../pages/fixture.js';

test.describe('Login Functionality', () => {
  test('should successfully log in with valid credentials and display the Products page', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  });


  test('should navigate to Products page after successful login', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });


  test('should display shopping cart icon after successful login', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.validUser();
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
  });


  //Negative Test Cases

  test('should display an error message when a locked-out user attempts to log in', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.invalidUser();
    await expect(
      page.getByText(
        'Epic sadface: Sorry, this user has been locked out.'
      )
    ).toBeVisible();
  });


  test('should display error for invalid username', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('invalid_user', 'secret_sauce');
    await expect(page.getByText(/Username and password do not match/i)).toBeVisible();
  });


  test('should display error for invalid password', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');
    await expect(page.getByText(/Username and password do not match/i)).toBeVisible();
  });


  test('should display error for invalid username and password', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('abc', 'xyz');
    await expect(page.getByText(/Username and password do not match/i)).toBeVisible();
  });


  test('should display error when username is empty', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', 'secret_sauce');
    await expect(page.getByText(/Username is required/i)).toBeVisible();
  });


  test('should display error when password is empty', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', '');
    await expect(page.getByText(/Password is required/i)).toBeVisible();
  });

});
