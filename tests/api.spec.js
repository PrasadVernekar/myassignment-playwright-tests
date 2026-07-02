import { test, expect } from '../pages/fixture.js';




test.describe(' API Tests', () => {

    test('should authenticate user successfully', async ({ api }) => {
        const response = await api.post('/auth/login', {
            data: {
                username: 'mor_2314',
                password: '83r5^_'
            }
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.token).toBeTruthy();
    });

    test('should create a new cart successfully', async ({ api }) => {
        const response = await api.post('/carts', {
            data: {
                userId: 1,
                date: '2026-07-01',
                products: [
                    {
                        productId: 1,
                        quantity: 2
                    }
                ]
            }
        });


        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.userId).toBe(1);
        expect(body.products[0].productId).toBe(1);
    });


    test('should create cart with multiple products', async ({ api }) => {
        const response = await api.post('/carts', {
            data: {
                userId: 2,
                date: '2026-07-01',
                products: [
                    { productId: 1, quantity: 1 },
                    { productId: 2, quantity: 3 }
                ]
            }
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.products.length).toBe(2);
    });


    test('should fail when creating cart with invalid payload', async ({ api }) => {
        const response = await api.post('/carts', {
            data: {}
        });
        expect(response.status()).not.toBe(200);
    });


    test('should retrieve cart by id', async ({ api }) => {
        const response = await api.get('/carts/1');
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.id).toBe(1);
    });

    test('should retrieve all carts', async ({ api }) => {
        const response = await api.get('/carts');
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
    });


    test('should update existing cart', async ({ api }) => {
        const response = await api.put('/carts/1', {
            data: {
                userId: 1,
                date: '2026-07-01',
                products: [
                    {
                        productId: 1,
                        quantity: 5
                    }
                ]
            }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.products[0].quantity).toBe(5);
    });


    test('should update cart with multiple products', async ({ api }) => {
        const response = await api.put('/carts/1', {
            data: {
                userId: 1,
                date: '2026-07-01',
                products: [
                    { productId: 1, quantity: 2 },
                    { productId: 3, quantity: 1 }
                ]
            }
        });
        expect(response.status()).toBe(200);
    });

    test('should delete cart successfully', async ({ api }) => {
        const response = await api.delete('/carts/1');

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.id).toBe(1);
    });

    test('should validate cart response schema', async ({ api }) => {
    const response = await api.get('/carts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toMatchObject({
        id: expect.any(Number),
        userId: expect.any(Number),
        date: expect.any(String),
        products: expect.any(Array)
    });

    body.products.forEach(product => {
        expect(product).toMatchObject({
            productId: expect.any(Number),
            quantity: expect.any(Number)
        });
    });
});


    const productIds = [1, 2, 3, 5];

    productIds.forEach((productId) => {
        test(`should create cart successfully for product ID ${productId}`, async ({ api }) => {

            const response = await api.post('/carts', {
                data: {
                    userId: 1,
                    date: '2026-07-01',
                    products: [
                        {
                            productId: productId,
                            quantity: 2
                        }
                    ]
                }
            });

            expect(response.status()).toBe(201);

            const body = await response.json();

            expect(body).toMatchObject({
                userId: 1,
                products: [
                    {
                        productId: productId,
                        quantity: 2
                    }
                ]
            });

            expect(body.id).toBeTruthy();
        });
    });

});


