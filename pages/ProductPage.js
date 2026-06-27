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
}
