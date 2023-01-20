import CartStore from "./CartStore";


test("CartStore",() => {
    const cartStore = new CartStore();
    const onStoreChange = jest.fn();
    cartStore.addListener(onStoreChange);
    cartStore.addItem({productId:1,quantity:1});
    expect(onStoreChange).toBeCalled();
})
