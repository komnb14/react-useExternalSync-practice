import Cart from "./Cart";
import Item from "./Item";


const context = describe;

describe("Cart", () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    })

    context("there is add not same item",() => {
        it('add an item',() => {
            const product = [1,2,3];
            cart = product.reduce((sum,cur) => sum.addItem({productId:cur,quantity:1}),cart)
            expect(cart.items).toHaveLength(3);
        });

        it('add item id is not infinity',() => {
            cart = cart.addItem({productId: 1, quantity: 1});
            expect(cart.items[0].id).toBe(1);
        })
    });

    context("there is add the same item",() => {
        it('add an item',() => {
            const product = [1,2,3];
            const productId = 1;

            cart = product.reduce((sum,cur) => sum.addItem({productId,quantity:cur}),cart)
            expect(cart.items).toHaveLength(1);
            expect(cart.items).toEqual([new Item({
                id: 1,
                productId: productId,
                quantity : product.reduce((sum,cur) => sum+cur,0),
            })])
        });

        it('add item id is not infinity',() => {

            cart = cart.addItem({productId: 1, quantity: 1});
            expect(cart.items[0].id).toBe(1);
        })
    })
})
