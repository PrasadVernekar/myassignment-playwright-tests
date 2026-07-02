export default class LoginPage {
    constructor(page) {
        this.page = page;
    }
 
 
    async goto() {
        await this.page.goto('/');
    }
 
 
    async validUser() {
        await this.page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
 
 
    async invalidUser() {
        await this.page.getByRole('textbox', { name: 'Username' }).fill('locked_out_user');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        await this.page.getByRole('button', { name: 'Login' }).click();
    }




   async login(username, password) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
}




 }
 
