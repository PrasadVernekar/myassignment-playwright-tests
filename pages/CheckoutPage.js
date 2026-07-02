export default class CheckoutPage {
    constructor(page) {
        this.page = page;
    }


    async openCheckout() {
        await this.page.locator('#shopping_cart_container').click();
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }


    async enterCheckoutInformation(firstName, lastName, zip) {
        await this.openCheckout();
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await this.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(zip);
        await this.page.locator('#continue').click();
    }


    async completeOrder() {
        await this.enterCheckoutInformation(
            'Prasad',
            'Vernekar',
            '560066'
        );
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }
}


