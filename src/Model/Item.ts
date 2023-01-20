export interface ModelItemType {
    productId: number
    quantity: number
}

export interface ItemType extends ModelItemType{
    id: number
}


export default class Item {

    readonly id: number;
    readonly productId: number;
    readonly quantity: number;

    constructor({id = 0, productId, quantity = 1}: ItemType) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity
    }

}
