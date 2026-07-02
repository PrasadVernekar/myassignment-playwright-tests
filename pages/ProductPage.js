export default class ProductPage {
  constructor(page) {
      this.page = page;
  }

  async sortProduct() {
      await this.page.getByRole('combobox').selectOption({
        label: 'Price (low to high)'
      });
    }

  async addToCart() {
      await this.page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
      await this.page.locator('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
  }

  async removeBackpack() {
  await this.page.locator('#remove-sauce-labs-backpack').click();
}


async openCart() {
  await this.page.locator('.shopping_cart_link').click();
}


async removeAllProducts() {
  await this.page.locator('#remove-sauce-labs-backpack').click();
  await this.page.locator('#remove-sauce-labs-bike-light').click();
}
}
